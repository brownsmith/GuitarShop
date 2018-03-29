import { connect } from 'react-redux';
import ProductsWrapper from '../../components/ProductsWrapper/ProductsWrapper';
import { withRouter } from 'react-router-dom';
import { fetchProducts } from '../../modules/actions/products';
import { RECEIVE_PRODUCTS } from '../../modules/actions/products.js';

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts(RECEIVE_PRODUCTS)),
  };
};

const mapStateToProps = state => {
  return {
    data: state.products.products,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductsWrapper)
);
