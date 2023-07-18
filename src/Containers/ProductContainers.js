import React, { Component } from "react";
import Product from "../Components/product";
import '../product.css'



class ProductContainer extends Component{
    constructor(){
        super()
        this.state = {
        productList: [],
        }
    }


    componentDidMount(){
        let fetchPromise = fetch('https://fakestoreapi.com/products');
        fetchPromise.then(res => res.json())
        .then(data => this.setState({productList: data}));
    }


    render(){
        let productComponents = this.state.productList.map(product => {
            return <Product url={product.image} name={product.title} desc={product.description} price={product.price} />
        })


        return(
            <div className="product-container">
                {productComponents}
            </div>
        )
    }
}

export default ProductContainer;
