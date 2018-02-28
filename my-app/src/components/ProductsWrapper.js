import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductsWrapper.css';
import Product from './Product.js';

export default class ProductsWrapper extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  _renderProducts = () => {
    return this.props.data.map((product, key) => (
      <Product productDetails={product} key={key} />
    ));
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Your search returned {this.props.data.length} results</h3>
        <div className="productsWrapper">{this._renderProducts()}</div>
      </div>
    );
  }
}
