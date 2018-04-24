import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.css';

export default class Product extends Component {
  static propTypes = {
    productDetails: PropTypes.object,
    title: PropTypes.string,
    addToCart: PropTypes.func,
    trolleyItems: PropTypes.array,
  };

  _createImage = productDetails => {
    return (
      <img
        src={require('../../images/' + productDetails.spec.image)}
        alt={productDetails.make + ' ' + productDetails.model}
      />
    );
  };

  _itemInTrolley = productId => {
    return this.props.trolleyItems.find(
      trolleyItem => trolleyItem.productId === productId
    )
      ? 'item in trolley'
      : false;
  };

  _addToCart = productDetails => {
    this.props.addToCart(productDetails);
    console.log('[LOG] added ' + productDetails.spec.name + ' to cart');
  };

  render() {
    return (
      <div className="product">
        <p>lkl {this._itemInTrolley(this.props.productDetails.productId)}</p>
        <h2>{this.props.title}</h2>
        {this._createImage(this.props.productDetails)}
        <p className="productTitle">
          {this.props.productDetails.make} {this.props.productDetails.model}
        </p>
        <p className="description">{this.props.productDetails.spec.name}</p>
        <p className="price">{this.props.productDetails.price}</p>
        <button
          className="button"
          onClick={() => this._addToCart(this.props.productDetails)}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}
