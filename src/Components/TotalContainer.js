import React, { Component } from "react";
import Button from "./button";

class TotalContainer extends Component{


    render(){
        let { total } = this.props;
        return(
            <div className="total-container">
                <div className="price-container">
                    <p>SUBTOTAL</p>
                    <p>${total}</p>
                </div>
                <Button className="checkout-btn" buttonText="CHECKOUT" />
            </div>
        )
    }

}

export default TotalContainer;
