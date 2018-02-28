import React, { Component } from 'react';
import './App.css';
import ProductsWrapper from './components/ProductsWrapper';
import products from './data/products.json';

export default class App extends Component {
  _loadData = () => {
    return products;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Guitar Store</h1>
        </header>
        <ProductsWrapper data={this._loadData()} />
      </div>
    );
  }
};
