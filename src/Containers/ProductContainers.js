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
        clicked: true
        }
    }

    _removeFromCart = (productID) => {
        let prevCart = this.state.cartItems;
        prevCart.splice(productID, 1);
        this.setState({cartItems: prevCart})
    }

    _updateQuanity = (operation, productId) => {
        let index = this.state.cartItems.findIndex(x => x.id === productId);
        let prevQuantity = parseInt(this.state.cartItems[index].quantity);
        if(operation === "-" && prevQuantity === 0){
            return;
        }

        let prevCart = this.state.cartItems;
        let updatedQuantity = operation === "+" ?  prevQuantity + 1 : prevQuantity - 1;
        prevCart[index].quantity = updatedQuantity;
        this.setState({cartItems: prevCart});
    }

    _updatePrice = (operation, productId) => {
        let index = this.state.cartItems.findIndex(x => x.id === productId);
        let item  = this.state.cartItems[index];
        let price = parseInt(item.price);
        let quantity = parseInt(item.quantity);
        if(quantity === 0){return;}
        let updatedTotal =  operation === "+" ? this.state.cartTotal + price : this.state.cartTotal - price;
        this.setState({cartTotal: updatedTotal})
    }

    handleClick = () => {
        let copyCart = this.state.cartItems;
        console.log(copyCart);
        copyCart.forEach((item, index) => {
            if(item.quantity === 0){
                this._removeFromCart(index);
            }
        })


        this.setState({clicked: false});
    }

    handleQuanity = (e) => {
        let opertation = e.target.textContent;
        let productId = e.target.dataset.id;
        this._updatePrice(opertation, productId);
        this._updateQuanity(opertation, productId);

    }



    handleAddToCart = (e) => {
        this.setState({clicked: true});
        const actualList = this.state.cartItems;
        let item = Object.assign({}, e.target.dataset)

        if(this.state.cartItems.find(x => x.id === item.id)){
            this._updateQuanity("+", e.target.dataset.id);
        }else{
        actualList.push(item)
        this.setState({cartItems: actualList})
        }
      this._updatePrice("+",e.target.dataset.id);
    }

    componentDidMount(){
        let fetchPromise = fetch('https://fakestoreapi.com/products');
        fetchPromise.then(res => res.json())
        .then(data => this.setState({productList: data}));
    }


    render(){
         let productComponents = this.state.productList.map(product => {
            return (
            <div className="product-box" key={product.id}>
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
