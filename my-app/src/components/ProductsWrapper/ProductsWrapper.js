import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductsWrapper.css';
import Product from '../../containers/Product/Product.js';

export default class ProductsWrapper extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func,
    data: PropTypes.array,
    loading: PropTypes.bool,
    orderProducts: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  _renderProducts = () => {
    if (this.props.data) {
      return this.props.data.map((product, key) => (
        <Product productDetails={product} key={key} className={product} />
      ));
    }
  };

  render() {
    return (
      <div className="productsWrapperComponent">
        <div onClick={() => this.props.orderProducts(this.props.data)}>
          High to Low
        </div>
        <div className="productsWrapper">
          {this.props.loading && (
            <div className="loaderWrapper">
              <div className="loader" />
            </div>
          )}
          {!this.props.loading && this._renderProducts()}
        </div>
      </div>
    );
  }
}
