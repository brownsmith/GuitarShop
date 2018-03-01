import React, { Component } from 'react';
import './App.css';
import ProductWrapper from './components/ProductsWrapper/ProductsWrapper';
import products from './api/products.json';

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
        <ProductWrapper data={this._loadData()} />
      </div>
    );
  }
};
