import { connect } from 'react-redux';
import { requestAllPins, requestPin } from '../../actions/pins_actions';
import Pins from './pins';

const mapStateToProps = ({ pins }) => ({
  pins
});

const mapDispatchToProps = dispatch => ({
  requestAllPins: () => dispatch(requestAllPins()),
  requestPin: pin => dispatch(requestPin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Pins);
