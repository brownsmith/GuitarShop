import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import ProductWrapper from './containers/ProductsWrapper/ProductsWrapper';
import Trolley from './containers/Trolley/Trolley';
import { Footer } from './components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="header">
            <h1 className="App-title">The Guitar Store</h1>
            <Trolley />
          </header>
          <main>
            <Switch>
              <Route exact path="/products" component={ProductWrapper} />
              <Route exact path="/trolley" component={Trolley} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Provider>
    );
  }
}

// Notes on <Provider store>:
// https://github.com/reactjs/react-redux/blob/master/docs/api.md
