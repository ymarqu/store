import React, { Component } from "react";
import '../App.js'

class Button extends Component{

    render(){
        const {buttonText, onClick, item, price, url, id, quantity} = this.props;
        return(
            <div>
                <button onClick={onClick} type="button" className="btn btn-lg btn-dark grow" data-item={item} data-price={price} data-url={url} data-id={id} data-quantity={quantity}>{buttonText}</button>
            </div>
        )
    }
}

export default Button;
