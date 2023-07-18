import React, { Component } from 'react';
import './App.css';
import ProductContainer from './Containers/ProductContainers';
import Navbar from './Components/Navbar';
import Cover from './Components/Cover'
import Cart from './Components/Cart';


class App extends Component{


  constructor(){
    super()
    this.state ={
        clicked: true
    }
}


handleClick = () => {
    this.setState({clicked: false});
    console.log('click')
}

handleAddToCart = () => {
  this.setState({clicked: true})
  console.log('click')
}

render(){


  return (
    <div className="App">
    <Navbar />
    <Cover coverText="All your favorites, All in one place." imgUrl="/Users/yeseniamarquina/Desktop/311/JSCourse/store/src/girlShopping.png"/>
    <ProductContainer onClick={this.handleAddToCart}/>
    {/* <Cart onClick={this.handleClick} click={this.state.clicked}/> */}
    </div>
   )
  }
}
export default App;
