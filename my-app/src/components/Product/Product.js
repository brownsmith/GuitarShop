import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.css';

export default class ProductsWrapper extends Component {
  static propTypes = {
    productDetails: PropTypes.object,
  };

  _createImage = productDetails => {
    return <img src={require('../../images/' + productDetails.spec.image)} alt={productDetails.make + ' ' + productDetails.model} />;
  };

  _addToCart = (spec) => {
    console.log('added ' + spec.name + ' to cart');
  }

  render() {
    return (
      <div className="product">
        {this._createImage(this.props.productDetails)}
        <p className="productTitle">
          {this.props.productDetails.make} {this.props.productDetails.model}
        </p>
        <p className="description">
          {this.props.productDetails.spec.description}
        </p>
        <button onClick={() => this._addToCart(this.props.productDetails.spec)}>Add to Cart</button>
      </div>
    );
  }
}
