import { connect } from 'react-redux';
import { requestSingleBoard, removeBoard } from '../../actions/board_actions';
import { deletePinning } from '../../actions/pinning_actions';
import { receiveSingleUser } from '../../actions/follow_actions';
import BoardShow from './board_show';


const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  boards: state.boards

});

const mapDispatchToProps = dispatch => ({
  receiveSingleUser: id => dispatch(receiveSingleUser(id)),
  requestSingleBoard: (userId, board) => dispatch(requestSingleBoard(userId, board)),
  deletePinning: id => dispatch(deletePinning(id)),
  removeBoard: id => dispatch(removeBoard(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
