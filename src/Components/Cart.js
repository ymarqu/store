import React, {Component} from "react"
import CartItemContainer from "./CartItemContainer";
import TotalContainer from "./TotalContainer";


class Cart extends Component{


    render(){
        let {onClick, click, currentCart, cartTotal} = this.props
        let classes = click ? "cart-container expand fl w-25 z-1 h-100 fixed top-0 right-0 pt5" : "cart-container dn";
        let exClasses = click ? "exit-box bg-white flex justify-center items-center" : "exit-box dn";
        let secondContainerClasses = click ? "second-container w-100 bg-white" : "second-container dn";
        return <div className={classes}>
            <div className={exClasses}> <i onClick={onClick} className="fa-regular fa-rectangle-xmark grow"></i></div>
            <div className={secondContainerClasses}>
            <div className="cart-title-container">
                <p className="cart-title"><i className="fa-solid fa-cart-shopping"></i> Cart</p>
            </div>
                <CartItemContainer cartItems={currentCart} />
                <TotalContainer total={cartTotal.toFixed(2)} />
                {/* <p>$ {cartTotal.toFixed(2)}</p> */}
            </div>
         </div>
    }
}

export default Cart;
