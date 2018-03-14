import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import './Trolley.css';

export default class Trolley extends Component {
  static propTypes = {
    trolleyItems: PropTypes.array,
  };

  _getTrolleyItemsLength = trolleyItems => {
    if (trolleyItems.length) {
      return trolleyItems.length > 1
        ? trolleyItems.length + ' items'
        : '1 item';
    } else {
      return '0 items';
    }
  };

  _getTrolleyPrice = trolleyItems => {
    let newItemPrice;
    let sum = 0;
    let total = 0;
    trolleyItems.forEach(item => {
      if (item.price.charAt(0) === '£') {
        newItemPrice = parseInt(item.price.substr(1), 10);
      }
      total = sum += newItemPrice;
    });
    return '£' + total;
  };

  render() {
    return (
      <div className="trolley">
        <span>
          You have {this._getTrolleyItemsLength(this.props.trolleyItems)} in
          your Trolley, totalling:{' '}
          {this._getTrolleyPrice(this.props.trolleyItems)}
        </span>
        <BrowserRouter>
          <Link to={{ pathname: '/trolley' }}>View Trolley</Link>
        </BrowserRouter>
      </div>
    );
  }
}
