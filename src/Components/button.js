import React, { Component } from "react";

class Button extends Component{

    render(){
        const {buttonText, onClick} = this.props;
        return(
            <div>
                <button onClick={onClick} type="button" className="btn btn-dark grow"><i className="fa-solid fa-cart-shopping"></i> {buttonText}</button>
            </div>
        )
    }
}

export default Button;
