import { connect } from 'react-redux';
import { requestAllPins, requestPin } from '../../actions/pins_actions';

import PinsIndex from './pins_index';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  pins: state.pins,
  pin: state.pin,
  boards: state.boards
});

const mapDispatchToProps = dispatch => ({
  requestAllPins: () => dispatch(requestAllPins()),
  requestPin: pin => dispatch(requestPin(pin))

});

export default connect(mapStateToProps, mapDispatchToProps)(PinsIndex);
