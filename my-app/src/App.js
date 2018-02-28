import React, { Component } from 'react';
import './App.css';
import ProductsWrapper from './components/ProductsWrapper';
import products from './data/products.json';

class App extends Component {
  _loadData = () => {
    return products;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test React Ecom Store KJHKJHKJHK</h1>
        </header>
        <ProductsWrapper data={this._loadData()} />
      </div>
    );
  }
}

export default App;
