import { connect } from 'react-redux';
import ProductsWrapper from '../../components/ProductsWrapper/ProductsWrapper';
import { withRouter } from 'react-router-dom';
import products from '../../api/products.json';

export default withRouter(connect((state) => {
  return {
    data: products,
  };
})(ProductsWrapper));
