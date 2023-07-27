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
        cartTotal: 0,
        newPrice:0,
        cartItems: [],
        clicked: false
        }
    }

    handleClick = () => {
        this.setState({clicked: false});
    }


    handleAddToCart = (e) => {
        this.setState({clicked: true});
        const actualList = this.state.cartItems;
        let item = Object.assign({}, e.target.dataset)
        actualList.push(item)
        let itemPrice = parseInt(item.price);
        this.setState({cartItems: actualList})
        let prevTotal = this.state.cartTotal + itemPrice;
        this.setState({cartTotal: prevTotal});
    }

    componentDidMount(){
        let fetchPromise = fetch('https://fakestoreapi.com/products');
        fetchPromise.then(res => res.json())
        .then(data => this.setState({productList: data}));
    }


    render(){
         let productComponents = this.state.productList.map(product => {
            return (
            <div key={product.id}>
            <Product  url={product.image} name={product.title} desc={product.description} price={product.price} />
            <Button onClick={this.handleAddToCart} buttonText="Add to cart" item={product.title} price={product.price} url={product.image}/>
            </div>)
        })


        return(
            <div className="product-container">
                {productComponents}
                <Cart currentCart={this.state.cartItems} onClick={this.handleClick} click={this.state.clicked} cartTotal={this.state.cartTotal}/>
            </div>
        )
    }
}

export default ProductContainer;
