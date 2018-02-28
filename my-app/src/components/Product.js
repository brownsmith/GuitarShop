import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.css';

export default class ProductsWrapper extends Component {
  static propTypes = {
    productDetails: PropTypes.object,
  };

  _createImage = image => {
    return <img src={require('../data/' + image)} alt="" />;
  };

  render() {
    return (
      <div className="product">
        {this._createImage(this.props.productDetails.spec.image)}
        <p className="productTitle">
          FOO {this.props.productDetails.make} {this.props.productDetails.model}
        </p>
      </div>
    );
  }
}
