import React from "react";

const Summary = props => {
    const ingredientList = props.ingredients.map(item => {
        return (
            <li key = {item.type}>{item.type}: {item.amount}</li>
        )
    })


    return (
        <div>
            <ul>
                {ingredientList}
            </ul>
        </div>
    );
}

export default Summary;