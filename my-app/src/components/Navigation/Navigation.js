import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className="navigation">
          <li>
            <Link to={{ pathname: '/' }}>Home</Link>
          </li>
          <li>
            <Link to={{ pathname: '/trolley' }}>View Trolley</Link>
          </li>
          <li>
            <Link to={{ pathname: '/products' }}>View Products</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
