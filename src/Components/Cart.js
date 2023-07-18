import React, {Component} from "react";

class Cart extends Component{


    render(){
        let {onClick, click} = this.props
        let classes = click ? "cart-container expand fl w-20 bg-purple z-1 h-100 fixed top-0 right-0 pt5" : "cart-container dn";
        return <div className={classes}>
            <i onClick={onClick} className="fa-regular fa-rectangle-xmark grow"></i>
            </div>
    }
}

export default Cart;
