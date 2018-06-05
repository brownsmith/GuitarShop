import { connect } from 'react-redux';
import ProductsWrapper from '../../components/ProductsWrapper/ProductsWrapper';
import { withRouter } from 'react-router-dom';
import {
  fetchProducts,
  RECEIVE_PRODUCTS,
  orderProducts,
} from '../../modules/actions/products';

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts(RECEIVE_PRODUCTS)),
    orderProducts: data => dispatch(orderProducts(data)),
  };
};

const mapStateToProps = state => {
  return {
    data: state.products.products,
    loading: state.products.loading,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductsWrapper)
);
