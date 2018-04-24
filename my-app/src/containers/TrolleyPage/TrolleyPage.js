import { connect } from 'react-redux';
import TrolleyPage from '../../components/TrolleyPage/TrolleyPage';

export default connect(state => {
  return {
    trolleyItems: state.trolley,
  };
})(TrolleyPage);
