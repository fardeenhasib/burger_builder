import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import Summary from "./Summary/Summary";
import { Modal, ModalBody, ModalFooter, Button, ModalHeader } from 'reactstrap';

const INGREDIENT_PRICE = {
    cheese: 20,
    salad: 10,
    meat: 80
}

export default class BurgerBuilder extends Component{

    state = {
        ingredients: [
            {type:'salad', amount:0 },
            {type:'cheese', amount:0 },
            {type:'meat', amount:0 }
        ],
        totalprice: 80,
        modalOpen: false,
        purchasable: false,
    }
    addIngredients = type => {
        //console.log(type);
        let newingredients = [...this.state.ingredients];
        const newprice = this.state.totalprice + INGREDIENT_PRICE[type];
        for (let item of newingredients){
            if (item.type === type){
                item.amount++;
            }
        }
        this.setState({ingredients: newingredients, totalprice: newprice});
        this.updatePurchasble(this.state.ingredients);
    }
    removeIngredients = type => {
        //console.log(type);
        let newingredients = [...this.state.ingredients];
        const newprice = this.state.totalprice - INGREDIENT_PRICE[type];
        for (let item of newingredients){
            if (item.type === type){
                if (item.amount <= 0) return ;
                item.amount--;
            }
        }
        this.setState({ingredients: newingredients, totalprice: newprice});
        this.updatePurchasble(this.state.ingredients);
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
        console.log(this.state.modalOpen)
    }

    updatePurchasble = ingredients => { 
        const totalelements = ingredients.reduce((sum,element)=>{
            return sum + element.amount;
        }, 0);
        this.setState({purchasable: totalelements > 0})

    }
    render (){
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.state.ingredients} />
                    <Controls ingredientsAdd = {this.addIngredients} 
                    ingredientsRemove = {this.removeIngredients}
                    price = {this.state.totalprice}
                    orderNow = {this.toggleModal}
                    purchasable= {this.state.purchasable}
                     />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>
                        <h3>Order Summary</h3>
                    </ModalHeader>
                    <ModalBody>  
                        <Summary ingredients = {this.state.ingredients}/>
                        <h5>Your Total Price: {this.state.totalprice} BDT</h5>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.toggleModal}>Continue to Checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}
