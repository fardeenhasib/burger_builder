import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Ingredients from "./Ingredients/Ingredients";

export default class BurgerBuilder extends Component{
    render (){
        return (
            <div>
                <Burger />
            </div>
        );
    }
}
