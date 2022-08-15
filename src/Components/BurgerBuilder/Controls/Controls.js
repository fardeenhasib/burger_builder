import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Button } from "reactstrap";

const controls = [
    {label: "Meat", type: "meat"},
    {label: "Cheese", type: "cheese"},
    {label: "Salad", type: "salad"},
]

const BuildControl = props => {
    return (
        <div className="d-flex bd-highlight">
            <div>{props.label}</div>
            <div className="p-2 flex-grow-1 bd-highlight"></div>
            <button className="p-2 bd-highlight btn btn-success btn-sm m-1" onClick={props.added}>More</button>
            <button className="p-2 bd-highlight btn btn-danger btn-sm m-1" onClick={props.removed}>Less</button>
        </div>
    );
}

const Controls = props => {
    console.log(props);
    return (
        <div className="container ml-md-5" style={{ textAlign: "center"}}>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                <CardHeader style={{ backgroundColor: "#D70F64", color: "white"}}><h4>Add Ingredients</h4></CardHeader>
                <CardBody>
                    {
                       controls.map(item => {
                        return (
                        <BuildControl 
                         label= {item.label}
                         type = {item.type}
                         added = {() => props.ingredientsAdd(item.type)}
                         removed = {() => props.ingredientsRemove(item.type)}
                         key = {Math.random()}
                        /> );
                       })                    
                    }
                </CardBody>
                <CardFooter><h5>Price: {props.price} BDT</h5></CardFooter>
                <Button disabled={!props.purchasable} onClick={props.orderNow}>Order Now</Button>
            </Card>
        </div>
    );
}

export default Controls;
