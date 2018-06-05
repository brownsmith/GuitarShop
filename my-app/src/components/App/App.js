import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import './App.css';
import ProductWrapper from '../../containers/ProductsWrapper/ProductsWrapper';
import Trolley from '../../containers/Trolley/Trolley';
import Footer from '../../components/Footer/Footer';
import HomePage from '../../components/HomePage/HomePage';
import Navigation from '../../components/Navigation/Navigation';
import TrolleyPage from '../../containers/TrolleyPage/TrolleyPage';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="header">
              {/* <h1 className="App-title">The Guitar Store</h1> */}
              <Trolley />
              <Navigation />
            </header>
            <main>
              <Route exact path="/" component={HomePage} />
              <Route path="/products" component={ProductWrapper} />
              <Route path="/trolley" component={TrolleyPage} />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

// Notes on <Provider store>:
// https://github.com/reactjs/react-redux/blob/master/docs/api.md
