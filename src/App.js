import React from 'react';
import './App.css';
import ProductContainer from './Containers/ProductContainers';
import Navbar from './Components/Navbar';
import Cover from './Components/Cover'


function App() {
  return (
    <div className="App">
    <Navbar />
    <Cover coverText="All your favorites, All in one place." imgUrl="/Users/yeseniamarquina/Desktop/311/JSCourse/store/src/girlShopping.png"/>
    <ProductContainer />
    </div>
  );
}

export default App;
