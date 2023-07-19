import React, { Component } from "react";
import CartItem from "../Components/CartItem";


class CartItemContainer extends Component{

    render(){
        let { cartItems } = this.props;

        let cartDisplay = cartItems.map((cartItem, index) => {
            let {item, price, url} = cartItem
            return(
                <div>
                    <CartItem productName={item} url={url} price={price}/>
                </div>
            )
        })
        return(
            <div className="cart-item-container">
                {cartDisplay}
            </div>
        )
    }
}

export default CartItemContainer;
