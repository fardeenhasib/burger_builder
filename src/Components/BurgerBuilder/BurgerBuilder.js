import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";


export default class BurgerBuilder extends Component{

    state = {
        ingredients: [
            {type:'salad', amount:0 },
            {type:'cheese', amount:0 },
            {type:'meat', amount:0 }
        ]
    }
    addIngredients = type => {
        //console.log(type);
        let newingredients = [...this.state.ingredients];
        for (let item of newingredients){
            if (item.type === type){
                item.amount++;
            }
        }
        this.setState({ingredients: newingredients});
    }
    removeIngredients = type => {
        //console.log(type);
        let newingredients = [...this.state.ingredients];
        for (let item of newingredients){
            if (item.type === type){
                if (item.amount <= 0) return ;
                item.amount--;
            }
        }
        this.setState({ingredients: newingredients});
    }
    render (){
        return (
            <div className="d-flex flex-md-row flex-column">
                <Burger ingredients={this.state.ingredients} />
                <Controls ingredientsAdd = {this.addIngredients} ingredientsRemove = {this.removeIngredients} />
            </div>
        );
    }
}
