import React, { Component } from 'react';
import './App.css';
import ProductContainer from './Containers/ProductContainers';
import Navbar from './Components/Navbar';
import Cover from './Components/Cover'


class App extends Component{

  constructor(){
    super()
    this.state = {
      scrollTop: 0
    }
  }

  handleScroll = (e) => {
    this.setState({scrollTop: e.currentTarget.scrollTop});
    console.log(this.state.scrollTop)
}

render(){


  return (
    <div className="App h-100" onScroll={this.handleScroll}>
    <Navbar />
    <Cover coverText="All your favorites, All in one place." imgUrl="/Users/yeseniamarquina/Desktop/311/JSCourse/store/src/girlShopping.png"/>
    <ProductContainer />
    </div>
   )
  }
}
export default App;
