import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import './App.css';
import ProductWrapper from '../../containers/ProductsWrapper/ProductsWrapper';
import Trolley from '../../containers/Trolley/Trolley';
import Footer from '../../components/Footer/Footer';
import HomePage from '../../components/HomePage/HomePage';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="header">
              <h1 className="App-title">The Guitar Store</h1>
              <Trolley />
              <nav>
                <ul className="navigation">
                  <li>
                    <Link to={{ pathname: '/trolley' }}>View Trolley</Link>
                  </li>
                  <li>
                    <Link to={{ pathname: '/products' }}>View Products</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <main>
              <Route exact path="/" component={HomePage} />
              <Route path="/products" component={ProductWrapper} />
              <Route path="/trolley" component={Trolley} />
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
