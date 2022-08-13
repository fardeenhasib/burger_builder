import React from "react";
import Ingredients from "../Ingredients/Ingredients";

const Burger = props => {
    console.log(props);
    let ingredientsArr = props.ingredients.map(item => {
        let amountArr = [...Array(item.amount).keys()];
        return amountArr.map(_ => {
            return <Ingredients type = {item.type} />
        })
    })

    return (
        <div>
            <Ingredients type="bread-top" />
            { ingredientsArr }
            <Ingredients type="bread-bottom" />
        </div>
    );
}

export default Burger;