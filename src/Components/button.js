import React, { Component } from "react";

class Button extends Component{

    render(){
        const {buttonText} = this.props;
        return(
            <div>
                <button type="button" class="btn btn-dark grow"><i class="fa-solid fa-cart-shopping"></i> {buttonText}</button>
            </div>
        )
    }
}

export default Button;
