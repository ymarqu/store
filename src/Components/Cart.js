import React, {Component} from "react"
import CartItemContainer from "./CartItemContainer";
import TotalContainer from "./TotalContainer";


class Cart extends Component{


    render(){
        let {onClick, click, currentCart, cartTotal, quantityClick} = this.props
        let classes = click ? "cart-container expand fl  z-1 h-100 fixed top-0 right-0" : "cart-container dn";
        let exClasses = click ? "exit-box flex justify-center items-center" : "exit-box dn";
        let secondContainerClasses = click ? "second-container w-100 bg-white" : "second-container dn";
        return <div className={classes}>
            <div className={exClasses}> <i onClick={onClick} className="fa-solid fa-square-xmark"></i></div>
            <div className={secondContainerClasses}>
            <div className="cart-title-container">
                <p className="cart-title"><i className="fa-solid fa-cart-shopping"></i> Cart</p>
            </div>
                <CartItemContainer cartItems={currentCart} quantityClick={quantityClick}/>
                <TotalContainer total={cartTotal.toFixed(2)} />
            </div>
         </div>
    }
}

export default Cart;
