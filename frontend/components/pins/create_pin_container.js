import { connect } from 'react-redux';
import { newPin } from '../../actions/pins_actions';
import CreatePin from './create_pin';

const mapStateToProps = ({ currentUser, errors }) => ({
  currentUser
});



const mapDispatchToProps = (dispatch) => ({
  newPin: pin => dispatch(newPin(pin))

});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePin);
