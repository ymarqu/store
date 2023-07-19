import React, { Component } from 'react';

class CartItem extends Component{


    render(){
        let { productName, url, price} = this.props;
        return(
            <div>
            <img src={url} alt="product" />
                <div>
                <p>{productName}</p>
                    <p>{price}</p>
                </div>
            </div>
        )
    }
}

export default CartItem;
