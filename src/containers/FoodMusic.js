import axios from 'axios'; 
import React, {useEffect, useMemo, useState} from 'react'; 
import {useParams} from "react-router-dom";
import MusicGenre from '../components/MusicGenre'; 
import Ingredient from '../components/Ingredient'; 

const apiKey = `82bf814c573d4bc7a52637bb33010e9d`; 

function FoodMusic(){

    let {id} = useParams(); 
    let numOfGenres = 100; //grab 100 

    const [ingredientData, setIngredientData] = useState(); 
    const [musicData, setMusicData] = useState();

    const URL_FOOD = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json/?apiKey=${apiKey}`
    const URL_MUSIC = `https://binaryjazz.us/wp-json/genrenator/v1/genre/${numOfGenres}`

    useEffect(() => {
        //Get Music Data
        if (numOfGenres) {
            axios
                .get(URL_MUSIC)
                .then(function (response) {
                    //SUCCESS
                    setMusicData(response.data); 
                    // console.log(response.data); 
                })
                .catch(function (error) {
                    console.warn(error); 
                })
        } 
    }, [URL_MUSIC, numOfGenres]); 

    useEffect(() => {
        //Get Food Data
        if (id) {
            axios
                .get(URL_FOOD)
                .then(function (response) {
                    //SUCCESS
                    setIngredientData(response.data); 
                    // console.log(response.data); 
                })
                .catch(function (error) {
                    console.warn(error); 
                })
        } 
    }, [URL_FOOD, id]); 
    
    const { ingredients, amount } = useMemo(() => {
        if (!ingredientData) return {};
        return {
            ingredients: ingredientData.ingredients,
            amount: ingredientData.ingredients.length, 
        }
    }, [])

    const { genres } = useMemo(() => {
        if (!musicData) return {}; 
        return {
            genres: musicData,
        }
    }, [])

    let minimizedGenre = []; 
    for (var i=0; i<Math.round(amount/2); i++){
        minimizedGenre[i] = genres[i]; 
    }

    return (
        <main className="foodDisplay"> 
            <div className="foodContainer">
                <section className="playlist">
                <h1 className="playlistTitle"> Genre Recommendations: </h1>
                    {minimizedGenre.map((result, key) => (
                            <MusicGenre result={result} key={key}/>
                    ))} 
                </section>

                <section className="recipe">
                    <h1 className="recipeTitle"> Ingredient List </h1>
                    {ingredients.map((result, key) => (
                            <Ingredient result={result} key={key}/>
                    ))} 
                </section>
            </div>  
        </main>
    )
}

export default FoodMusic