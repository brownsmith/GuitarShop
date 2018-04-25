import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Trolley.css';

export default class Trolley extends Component {
  static propTypes = {
    trolleyItems: PropTypes.array,
    trolleyTotal: PropTypes.string,
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

  // _displayTrolleyContents = trolleyContents => {
  //   console.log(trolleyContents);
  // };

  render() {
    return (
      <div className="trolley">
        <span className="innerTrolley">
          {this._getTrolleyItemsLength(this.props.trolleyItems)} in your
          Trolley, totalling: {this.props.trolleyTotal}
        </span>
      </div>
    );
  }
}
