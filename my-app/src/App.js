import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import ProductWrapper from './containers/ProductsWrapper/ProductsWrapper';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Guitar Store</h1>
        </header>
        <main>
          <Route exact path="/" component={ProductWrapper} />
        </main>
      </div>
    )
  }
  
};
