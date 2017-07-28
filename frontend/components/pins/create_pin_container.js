import { connect } from 'react-redux';
import { newPin, requestAllPins } from '../../actions/pins_actions';
import CreatePin from './create_pin';

const mapStateToProps = ({ currentUser, errors }) => ({
  currentUser,
  errors
});



const mapDispatchToProps = (dispatch) => ({
  newPin: pin => dispatch(newPin(pin)),
  requestAllPins: () => dispatch(requestAllPins())

});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePin);
