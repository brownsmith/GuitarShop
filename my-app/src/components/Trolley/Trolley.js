import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Trolley.css';

export default class Trolley extends Component {
  static propTypes = {
    trolleyItems: PropTypes.array,
  };

  render() {
    return <div className="trolley">Trolley</div>;
  }
}
