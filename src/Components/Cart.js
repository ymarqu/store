import React, {Component} from "react";

class Cart extends Component{

    constructor(){
        super()
        this.state ={
            clicked: false
        }
    }


    handleClick = () => {
        this.setState({clicked: true});
    }

    render(){
        let classes = this.state.clicked ? "cart-container dn" : "cart-container expand fl w-20 bg-purple z-1 h-100 absolute top-0 right-0";
        return <div className={classes}>
            <i onClick={this.handleClick} className="fa-regular fa-rectangle-xmark grow"></i>
            </div>
    }
}

export default Cart;
