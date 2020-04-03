import { connect } from 'react-redux';
import TrolleyPage from '../../components/TrolleyPage/TrolleyPage';
import {
  getTrolley,
  getTrolleyLength,
} from '../../modules/selectors/trolley.js';

export default connect(state => {
  return {
    trolleyItemsTotal: getTrolleyLength(state),
    trolleyItems: getTrolley(state),
  };
})(TrolleyPage);
