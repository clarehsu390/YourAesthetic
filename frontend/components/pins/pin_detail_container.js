import { connect } from 'react-redux';
import PinDetail from './pin_detail';
import { requestPin } from '../../pins_actions';

const mapStateToProps = ({ pin }) => ({
  pin
});

const mapDispatchToProps = dispatch => ({
  requestPin: pin => dispatch(requestPin(pin))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinDetail);
