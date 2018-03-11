import { connect } from 'react-redux';
import Trolley from '../../components/Trolley/Trolley';

export default connect(state => {
  return {
    trolleyItems: state.trolley,
  };
})(Trolley);
