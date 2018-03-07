import { connect } from 'react-redux';
import Product from '../../components/Product/Product.js';
import { withRouter } from 'react-router-dom';

export default withRouter(
  connect(state => {
    return {
      title: 'Fender',
    };
  })(Product)
);
