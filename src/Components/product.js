import React, {Component} from "react";
import Button from "./button.js";
class Product extends Component{

    render(){
        let { url, desc, price} = this.props;
        return(
            <div>
                <img src={url} al="" />
                <p className="product-desc">{desc}</p>
                <div className="card-line"></div>
                <p className="price">{price}</p>
                <Button buttonText="Add to cart"/>
            </div>
        )
    }
}

export default Product;
