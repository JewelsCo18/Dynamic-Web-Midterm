import React from 'react'

function Ingredient({ result }) {

    return (
        <div className="ingredientCard">
            <div className="ingredientTitle">
                <h1>{result.amount.metric.value} of {result.amount.metric.unit} of {result.name}</h1>
            </div>
        </div>
    )
}

export default Ingredient