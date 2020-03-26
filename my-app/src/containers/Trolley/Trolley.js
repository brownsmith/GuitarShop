import { connect } from 'react-redux';
import Trolley from '../../components/Trolley/Trolley';
import {
  getTrolleyTotalPrice,
  getTrolley,
} from '../../modules/selectors/trolley';

const mapStateToProps = state => ({
  trolleyItems: getTrolley(state),
  trolleyTotal: getTrolleyTotalPrice(state),
});

export default connect(mapStateToProps, null)(Trolley);
