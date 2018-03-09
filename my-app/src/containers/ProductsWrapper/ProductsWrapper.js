import { connect } from 'react-redux';
import ProductsWrapper from '../../components/ProductsWrapper/ProductsWrapper';
import { withRouter } from 'react-router-dom';

export default withRouter(
  connect(state => {
    return {
      data: state.products,
    };
  })(ProductsWrapper)
);
