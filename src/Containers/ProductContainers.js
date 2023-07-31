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



    handleQuanity = (e) => {
        let opertation = e.target.textContent;
        console.log(opertation)
        let itemId = e.target.dataset.id;
        let copy = this.state.cartItems;
        console.log(copy)
        let itemIndex = copy.findIndex(x => x.id === itemId);

        if(opertation == "+"){
        let newQuanitiy= parseInt(copy[itemIndex].quantity) + 1;
        console.log(newQuanitiy)
        copy[itemIndex].quantity = newQuanitiy.toString();

        this.setState({cartItems: copy});
        }else{
            if(copy[itemIndex] === 0){
                return;
            }
            let newQuanitiy= parseInt(copy[itemIndex].quantity) - 1;
            console.log(newQuanitiy)
            copy[itemIndex].quantity = newQuanitiy.toString();
            this.setState({cartItems: copy});
        }
    }



    handleAddToCart = (e) => {
        this.setState({clicked: true});
        console.log(this.state.cartItems.includes(e.target.dataset));
        console.log(e.target.dataset)
        const actualList = this.state.cartItems;
        let item = Object.assign({}, e.target.dataset)
        console.log(item.id)
        console.log(item.quantity)

        if(this.state.cartItems.find(x => x.id === item.id)){
            let copy = this.state.cartItems;
            console.log(copy)
            let itemToIncrease = copy.findIndex(x => x.id === item.id);
            console.log(itemToIncrease)
            let newQuanitiy= parseInt(copy[itemToIncrease].quantity) + parseInt(item.quantity);
            console.log(newQuanitiy)
            copy[itemToIncrease].quantity = newQuanitiy.toString();

            this.setState({cartItems: copy});
        }else{
            console.log('goo off')

        console.log(this.state.cartItems.includes(item.id));
        actualList.push(item)
        console.log(item)
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
