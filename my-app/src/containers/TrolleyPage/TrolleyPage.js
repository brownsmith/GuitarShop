import { connect } from 'react-redux';
import TrolleyPage from '../../components/TrolleyPage/TrolleyPage';
import { getTrolleyLength } from '../../modules/selectors/trolley.js';

export default connect(state => {
  return {
    trolleyItemsTotal: getTrolleyLength(state),
  };
})(TrolleyPage);
