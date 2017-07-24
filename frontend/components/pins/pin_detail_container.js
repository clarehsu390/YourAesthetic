import { connect } from 'react-redux';
import PinDetail from './pin_detail';
import { requestPin } from '../../pins_actions';
import { createPinning } from '../../pinning_actions';

const mapStateToProps = ({ pin }) => ({
  pin
});

const mapDispatchToProps = dispatch => ({
  requestPin: pin => dispatch(requestPin(pin)),
  createPinning: pinning => dispatch(createPinning(pinning))

});

export default connect(mapStateToProps, mapDispatchToProps)(PinDetail);
