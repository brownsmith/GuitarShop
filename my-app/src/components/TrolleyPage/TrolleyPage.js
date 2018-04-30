import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TrolleyPage.css';

export default class TrolleyPage extends Component {
  static propTypes = {
    trolleyItemsTotal: PropTypes.number,
  };

  render() {
    return (
      <div className="trolleyPage">
        <h1>You have {this.props.trolleyItemsTotal} items in your trolley</h1>
      </div>
    );
  }
}
