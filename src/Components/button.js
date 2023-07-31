import React, { Component } from "react";

class Button extends Component{

    render(){
        const {buttonText, onClick, item, price, url, id, quantity} = this.props;
        return(
            <div>
                <button onClick={onClick} type="button" className="btn btn-dark grow" data-item={item} data-price={price} data-url={url} data-id={id} data-quantity={quantity}><i className="fa-solid fa-cart-shopping"></i> {buttonText}</button>
            </div>
        )
    }
}

export default Button;
