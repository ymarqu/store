import React, { Component } from 'react';
import '../product.css'
import imgUrl from '../girlShopping.png'

class Cover extends Component{

    render(){
        const {coverText} = this.props;
        return(
            <div className='cover'>
                <div className='img-container'>
                <p>{coverText}</p>
                <img src={imgUrl}></img>
                </div>
            </div>
        )
    }
}

export default Cover;
