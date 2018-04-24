import React, { Component } from 'react';
import './TrolleyPage.css';

export default class TrolleyPage extends Component {
  static propTypes = {
    trolleyProducts: PropTypes.array,
  };

  render() {
    return (
      <div className="trolleyPage">
        <h1>trolley page</h1>
      </div>
    );
  }
}
