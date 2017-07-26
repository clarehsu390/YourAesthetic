import { connect } from 'react-redux';
import { createPinning } from '../../actions/pinning_actions';
import { requestBoards } from '../../actions/board_actions';
import { requestPin } from '../../actions/pins_actions';
import CreatePinning from './create_pinnings';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  boards: state.boards,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestBoards: userId => dispatch(requestBoards(userId)),
  createPinning: pinning => dispatch(createPinning(pinning))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinning);
