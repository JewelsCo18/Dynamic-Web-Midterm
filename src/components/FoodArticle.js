import React from 'react'

function FoodArticle({ result }) {

    return (
        <div>

            <div className="foodImage" style = {{
                backgroundImage: `url('${result.image}')`, 
                backgroundPosition: "center", 
                backgroundSize: "cover", 
                }}>
                <div className="foodTitle">
                    <a href={`/${result.id}`}> {result.title}</a>
                </div>
            </div>

            

        </div>
    )
}

export default FoodArticle