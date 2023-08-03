import React, { Component } from "react";
import Button from "./button";
import '../cart.css';


class ItemQuantities extends Component{


    render(){

        let { quantity, quantityClick, id, price} = this.props;

        return(
            <div className="item-quantities-contiaer flex">
            <div className="quantity-container">
            <button className="control minus-btn" onClick={quantityClick} data-id={id}>-</button>
            <p className="number">{ quantity }</p>
            <button className="control plus-btn" onClick={quantityClick} data-id={id}>+</button>
            </div>
            </div>
        )
    }
}

export default ItemQuantities;
