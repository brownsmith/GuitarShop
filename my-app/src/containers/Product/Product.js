import { connect } from 'react-redux';
// this imports the named, exported Component from Product.js
import Product from '../../components/Product/Product.js';
import { withRouter } from 'react-router-dom';

export default withRouter(connect((state) => {
  return {
    title: 'Title',
  }
})(Product));