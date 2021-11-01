import axios from 'axios'; 
import React, {useEffect, useMemo, useState} from 'react'; 
import {useLocation} from "react-router-dom";
import FoodArticle from '../components/FoodArticle'; 

const apiKey = `82bf814c573d4bc7a52637bb33010e9d`; 

function useQuery() { 
    return new URLSearchParams(useLocation().search); 
}

function changeWord(e) {
    e.preventDefault(); 
    // const word = e.currentTarget.word; 
}

function Home() {

    const [food, setFood] = useState(); 
    const [recipeData, setrecipeData] = useState(); 
    let query = useQuery();
    const URL_FOOD = `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${apiKey}&query=${food}`
    
    useEffect(() => {
        const foodValue = query.get('food'); 
        setFood(foodValue); 
    })

    useEffect(() => {
        //Get Food Data
        if (food) {
            axios
                .get(URL_FOOD)
                .then(function (response) {
                    //SUCCESS
                    setrecipeData(response.data); 
                    console.log(response.data); 
                })
                .catch(function (error) {
                    console.warn(error); 
                })
        } 
    }, [URL_FOOD, food]); 
    
    const {results} = useMemo(() => {
        if (!recipeData) return {}; //if recipeData is non existent we return an empty object
        return {
            results: recipeData.results, 
        }
    }, [])

    return ( 
        <main>
            <div className="foodSection">
                <h1 className="foodTitle">MUSICAL FOOD</h1>
                <div className = "pageWrapper"> 
                    <form  onSubmit={(e) => changeWord()}>
                        <input className="foodFormInput" type="text" placeholder="Type Food" name="food"/>
                        <button className="foodFormButton" type="submit" style={{marginBottom:`10px`}}>Click</button>
                    </form>

                    <div className="foodContent">
                        {results.map((result, key) => (
                            <FoodArticle result={result} key={key}/>
                        ))} 
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Home;