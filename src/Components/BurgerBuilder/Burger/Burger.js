import React from "react";
import Ingredients from "../Ingredients/Ingredients";

const Burger = props => {
    return (
        <div>
            <Ingredients type="bread-top" />
            <Ingredients type="meat" />
            <Ingredients type="cheese" />
            <Ingredients type="salad" />
            <Ingredients type="bread-bottom" />
        </div>
    );
}

export default Burger;