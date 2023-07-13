import React, {Component} from "react";
import Button from "./button.js";

class Product extends Component{

    render(){
        let { url, desc, price, name } = this.props;
        return(
            <div className="product dib pa3 br3 ma2 grow bw2 shawdow-5">
                <img src={url} alt="product" />
                <p className="product-title">{name.slice(0, 31)}</p>
                <p className="product-desc">{desc.slice(0, 70) + "..."}</p>
                <div className="card-line"></div>
                <p className="price">${price}</p>
                <Button buttonText="Add to cart"/>
            </div>
        )
    }
}

export default Product;
