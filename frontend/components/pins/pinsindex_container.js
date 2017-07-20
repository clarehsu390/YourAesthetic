import { connect } from 'react-redux';
import { requestAllPins } from '../../actions/pins_actions';
import PinsIndex from './pins_index';

const mapStateToProps = ({ pins }) => ({
  pins
});

const mapDispatchToProps = dispatch => ({
  requestAllPins: () => dispatch(requestAllPins())
});

export default connect(mapStateToProps, mapDispatchToProps)(PinsIndex);
