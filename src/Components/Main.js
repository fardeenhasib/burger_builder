import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import { Route } from "react-router-dom";
import Checkout from "./Order/Checkout/Checkout";
import Order from "./Order/Order";

const Main = props => {
    return (
        <div>
            <Header />
            <div className="container">
                    <Route path="/order" component={Order} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/" exact component={BurgerBuilder} />
            </div>
        </div>
    );
    
}

export default Main;
