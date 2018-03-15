import { connect } from 'react-redux';
import Trolley from '../../components/Trolley/Trolley';
import { getTrolleyTotalPrice } from '../../modules/selectors/trolley';

export default connect(state => {
  return {
    trolleyItems: state.trolley,
    trolleyTotal: getTrolleyTotalPrice(state),
  };
})(Trolley);
