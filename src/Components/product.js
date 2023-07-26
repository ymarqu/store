import React, {Component} from "react";
import '../product.css'

class Product extends Component{

    render(){
        let { url, desc, price, name } = this.props;
        return(
            <div className="product dib pa3 br3 ma2 bw2 shawdow-5">
                <img src={url} alt="product" />
                <p className="product-title">{name.slice(0, 30)}</p>
                <p className="product-desc">{desc.slice(0, 50).toLowerCase()+ "..."}</p>
                <div className="card-line"></div>
                <p className="price">${parseInt(price).toFixed(2)}</p>
            </div>
        )
    }
}

export default Product;
