import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TrolleyPage.css';

export default class TrolleyPage extends Component {
  static propTypes = {
    trolleyItemsTotal: PropTypes.number,
    trolleyItems: PropTypes.array,
  };

  render() {
    return (
      <div className="trolleyPage">
        {this.props.trolleyItems.length && (
          <h1>You have {this.props.trolleyItemsTotal} items in your trolley</h1>
        )}
        {!this.props.trolleyItems.length && <p>trolley empty</p>}
        <p>Display trolley items</p>
      </div>
    );
  }
}
