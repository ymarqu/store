import React, {Component} from "react"
import CartItemContainer from "./CartItemContainer";


class Cart extends Component{


    render(){
        let {onClick, click, currentCart} = this.props
        let classes = click ? "cart-container expand fl w-20 z-1 h-100 bg-white fixed top-0 right-0 pt5" : "cart-container dn";
        return <div className={classes}>
            <div className="cart-title-container">
                <p className="cart-title"><i className="fa-solid fa-cart-shopping"></i> Cart</p>
                <i onClick={onClick} className="fa-regular fa-rectangle-xmark grow"></i>
            </div>
                <CartItemContainer cartItems={currentCart} />
            </div>
    }
}

export default Cart;
