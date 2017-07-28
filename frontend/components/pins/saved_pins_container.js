import { connect } from 'react-redux';
import SavedPins from './saved_pins';
import { requestBoards } from '../../actions/board_actions';

const mapStateToProps = state => ({
  pins: state.userProfile.pins,
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestBoards: userId => dispatch(requestBoards(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedPins);
