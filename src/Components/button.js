import React, { Component } from "react";

class Button extends Component{

    render(){
        const {buttonText} = this.props;
        return(
            <div>
                <button class="btn">{buttonText}</button>
            </div>
        )
    }
}

export default Button;
