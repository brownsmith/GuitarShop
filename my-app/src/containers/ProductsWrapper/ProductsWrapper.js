import { connect } from 'react-redux';
import ProductsWrapper from '../../components/ProductsWrapper/ProductsWrapper';
import { withRouter } from 'react-router-dom';
import { fetchProducts } from '../../modules/actions/products';
import { RECEIVE_PRODUCTS } from '../../modules/actions/products';
import { orderProductsHighToLow } from '../../modules/selectors/product';

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts(RECEIVE_PRODUCTS)),
  };
};

const mapStateToProps = state => {
  return {
    data: state.products.products,
    loading: state.products.loading,
    highToLow: () => orderProductsHighToLow(state),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductsWrapper)
);
