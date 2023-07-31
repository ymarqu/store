import React, { Component } from "react";
import Button from "./button";

class ItemQuantities extends Component{


    render(){

        let { quantity, quantityClick, id} = this.props;

        return(
            <div className="item-quantities-contiaer flex">
            <Button buttonText="-" onClick={quantityClick} id={id}/>
            <p>{ quantity }</p>
            <Button buttonText="+" onClick={quantityClick} id={id}/>
            </div>
        )
    }
}

export default ItemQuantities;
