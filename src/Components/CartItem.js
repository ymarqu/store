import React, { Component } from 'react';
import '../cart.css'

class CartItem extends Component{


    render(){
        let { productName, url, price} = this.props;
        return(
            <div className='single-item-container'>
             <img className='single-item-img' src={url} alt="product" />
             <div className='single-item-text'>
               <p className='single-item-name'>{productName}</p>
               <p className='single-item-price'>{parseInt(price).toFixed(2)}</p>
              </div>
            </div>
        )
    }
}

export default CartItem;
