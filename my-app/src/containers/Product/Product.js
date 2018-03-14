import { connect } from 'react-redux';
import Product from '../../components/Product/Product.js';
import { withRouter } from 'react-router-dom';
import { ADD_TO_CART } from '../../modules/actions/trolley.js';
import { addProductToCart } from '../../modules/actions/trolley.js';

const mapDispatchToProps = dispatch => {
  return {
    addToCart: productDetails =>
      dispatch(addProductToCart(productDetails, ADD_TO_CART)),
  };
};

const mapStateToProps = state => {
  return {
    title: 'Fender',
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Product)
);
