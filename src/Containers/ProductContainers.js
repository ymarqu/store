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

    // componentDidMount(){

    // }

    handleClick = () => {
        this.setState({clicked: false});
        console.log("click");
        console.log(this.state.clicked)
    }

    handleAddToCart = (e) => {
        this.setState({clicked: true});
        console.log(e.target.dataset)
        const actualList = this.state.cartItems;
        let item = Object.assign({}, e.target.dataset)
        actualList.push(item)
        this.setState({cartItems: actualList})
        // this.setState({newPrice: price})
        // let price = parseInt(item.price);
        // let updatedTotal = price + this.state.cartTotal;
        // this.setState({cartTotal: updatedTotal})
        // console.log(this.state.cartTotal);
        // this.setState((state, props) => ({
        //     cartTotal: state.cartTotal + 5,
        // }));

        console.log(this.state.cartTotal);
    }




    componentDidMount(){
        let fetchPromise = fetch('https://fakestoreapi.com/products');
        fetchPromise.then(res => res.json())
        .then(data => this.setState({productList: data}));

       this.setState((state, props) => ({
        cartTotal: state.cartTotal + this.state.newPrice,
    }));
    console.log(this.state.cartTotal);
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
                <Cart currentCart={this.state.cartItems} onClick={this.handleClick} click={this.state.clicked}/>
            </div>
        )
    }
}

export default ProductContainer;
