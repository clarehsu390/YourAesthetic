import RemovePinnings from './remove_pinnings';
import { deletePinning } from '../../actions/pinning_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  board: state.boards,
  pins: state.boards.pins
});

const mapDispatchToProps = dispatch => ({
  deletePinning: pinning => dispatch(deletePinning(pinning))
});

export default connect(mapStateToProps, mapDispatchToProps)(RemovePinnings);
