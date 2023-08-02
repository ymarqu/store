import React, { Component } from 'react';
import '../product.css'
import imgUrl from '../banner.jpeg'

class Cover extends Component{

    render(){
        const {coverText} = this.props;
        return(
            <div className='cover' style={{background: `url${imgUrl}`}}>
                <div className='img-container'>
                <p>{coverText}</p>
                <img src={imgUrl} alt="miss. gurl shopping puuurr"></img>
                </div>
            </div>
        )
    }
}

export default Cover;
