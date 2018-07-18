import { connect } from 'react-redux';
import Trolley from '../../components/Trolley/Trolley';
import {
  getTrolleyTotalPrice,
  getTrolley,
} from '../../modules/selectors/trolley';

export default connect(state => {
  return {
    trolleyItems: getTrolley(state),
    trolleyTotal: getTrolleyTotalPrice(state),
  };
})(Trolley);
