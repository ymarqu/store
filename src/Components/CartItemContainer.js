import React, { Component } from "react";
import CartItem from "../Components/CartItem";
import ItemQuantities from "./ItemQuantities";
import '../cart.css'



class CartItemContainer extends Component{

    render(){
        let { cartItems, quantityClick} = this.props;

        let cartDisplay = cartItems.map((cartItem, index) => {
            let {item, price, url, quantity, id} = cartItem
            return(
                <div key={index}>
                    <CartItem productName={item} url={url} price={price} />
                    <ItemQuantities quantity={quantity} quantityClick={quantityClick} id={id} price={price}/>
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
