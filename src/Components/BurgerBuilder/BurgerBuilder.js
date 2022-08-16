import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import Summary from "./Summary/Summary";
import { Modal, ModalBody, ModalFooter, Button, ModalHeader } from 'reactstrap';
import { connect} from 'react-redux';
import { addIngredient, removeIngredient, updatePurchasable} from '../../Redux/actionCreators';

const mapStatetoProps = state => {
    return(
        {
            ingredients: state.ingredients,
            totalprice: state.totalprice,
            purchasable: state.purchasable,
        }
    )
}

const mapDispatchtoProps = dispatch => {
    return(
        {
            addIngredient: (igtype)=>dispatch(addIngredient(igtype)),
            removeIngredient: (igtype)=>dispatch(removeIngredient(igtype)),
            updatePurchasable:()=>dispatch(updatePurchasable())
        }
    )
}

class BurgerBuilder extends Component{

    state = {
        modalOpen: false,
    }
    addIngredients = type => {
        //console.log(type);
        this.props.addIngredient(type);
         this.props.updatePurchasable();


    }
    removeIngredients = type => {
        //console.log(type);
        this.props.removeIngredient(type);
        this.props.updatePurchasable(); 
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
        console.log(this.state.modalOpen)
    }

    // updatePurchasble = () => { 
    //     this.props.updatePurchasable();

    // }
    handleCheckout = () => {
        this.props.history.push("/checkout")
    }

    componentDidMount () {
        console.log(this.props)
    }
    render (){
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.props.ingredients} />
                    <Controls ingredientsAdd = {this.addIngredients} 
                    ingredientsRemove = {this.removeIngredients}
                    price = {this.props.totalprice}
                    orderNow = {this.toggleModal}
                    purchasable= {this.props.purchasable}
                     />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>
                        <h3>Order Summary</h3>
                    </ModalHeader>
                    <ModalBody>  
                        <Summary ingredients = {this.props.ingredients}/>
                        <h5>Your Total Price: {this.props.totalprice} BDT</h5>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.handleCheckout}>Continue to Checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(BurgerBuilder);