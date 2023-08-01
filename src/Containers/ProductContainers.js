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

    _updateQuanity = (operation, productId) => {
        let index = this.state.cartItems.findIndex(x => x.id === productId);
        let prevCart = this.state.cartItems;
        let prevQuantity = parseInt(prevCart[index].quantity);
        let updatedQuantity = 0;
        if(operation === "+"){
            updatedQuantity = prevQuantity + 1;
        }else{
            if(prevQuantity === 0){
                return;
            }
            updatedQuantity = prevQuantity - 1;
        }
        prevCart[index].quantity = updatedQuantity;
        this.setState({cartItems: prevCart});
    }

    handleQuanity = (e) => {
        let opertation = e.target.textContent;
        let productId = e.target.dataset.id;
        this._updateQuanity(opertation, productId);
    }



    handleAddToCart = (e) => {
        this.setState({clicked: true});
        console.log(this.state.cartItems.includes(e.target.dataset));
        console.log(e.target.dataset)
        const actualList = this.state.cartItems;
        let item = Object.assign({}, e.target.dataset)
        if(this.state.cartItems.find(x => x.id === item.id)){
            this._updateQuanity("+", e.target.dataset.id);
        }else{
        actualList.push(item)
        let itemPrice = parseInt(item.price);
        this.setState({cartItems: actualList})
        let prevTotal = this.state.cartTotal + itemPrice;
        this.setState({cartTotal: prevTotal});
    }
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
            <Product  url={product.image} name={product.title} desc={product.description} price={product.price} id={product.id} quantity="1"/>
            <Button onClick={this.handleAddToCart} buttonText="Add to cart" item={product.title} price={product.price} url={product.image} id={product.id} quantity="1"/>
            </div>)
        })


        return(
            <div className="product-container">
                {productComponents}
                <Cart quantityClick={this.handleQuanity} currentCart={this.state.cartItems} onClick={this.handleClick} click={this.state.clicked} cartTotal={this.state.cartTotal}/>
            </div>
        )
    }
}

export default ProductContainer;
