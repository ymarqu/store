import React, { Component } from "react";
import Product from "../Components/product";
import Button from "../Components/button";
import Cart from "../Components/Cart"
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
        let {onClick} = this.props;
         let productComponents = this.state.productList.map(product => {
            return (
            <div>
            <Product onClick={onClick} key={product.id} url={product.image} name={product.title} desc={product.description} price={product.price} />
            <Button onClick={onClick} buttonText="Add to cart"/>
            </div>)
        })


        return(
            <div className="product-container">
                {productComponents}
                <Cart />
            </div>
        )
    }
}

export default ProductContainer;
