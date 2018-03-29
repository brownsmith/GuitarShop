import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductsWrapper.css';
import Product from '../../containers/Product/Product.js';

export default class ProductsWrapper extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func,
    data: PropTypes.array,
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  _renderProducts = () => {
    if (this.props.data) {
      return this.props.data.map((product, key) => (
        <Product productDetails={product} key={key} />
      ));
    }
  };

  render() {
    return (
      <div className="productsWrapperComponent">
        <div className="productsWrapper">{this._renderProducts()}</div>
      </div>
    );
  }
}
