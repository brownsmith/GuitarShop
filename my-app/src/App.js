import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import ProductWrapper from './containers/ProductsWrapper/ProductsWrapper';
import { Footer } from './components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">The Guitar Store</h1>
          </header>
          <main>
            <BrowserRouter>
              <Route exact path="/products" component={ProductWrapper} />
            </BrowserRouter>
          </main>
          <Footer />
        </div>
      </Provider>
    );
  }
}

// Notes on <Provider store>:
// https://github.com/reactjs/react-redux/blob/master/docs/api.md
