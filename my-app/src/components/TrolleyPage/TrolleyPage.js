import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TrolleyPage.css';

export default class TrolleyPage extends Component {
  static propTypes = {
    trolleyItems: PropTypes.array,
  };

  _getTrolleyLength = () => {
    return this.props.trolleyItems.length;
  };

  render() {
    return (
      <div className="trolleyPage">
        <h1>You have {this._getTrolleyLength()} items in your trolley</h1>
      </div>
    );
  }
}
