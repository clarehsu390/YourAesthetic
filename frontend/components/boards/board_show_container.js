import { connect } from 'react-redux';
import { requestSingleBoard, removeBoard } from '../../actions/board_actions';
import { deletePinning } from '../../actions/pinning_actions';
import BoardShow from './board_show';


const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  boards: state.boards
});

const mapDispatchToProps = dispatch => ({
  requestSingleBoard: board => dispatch(requestSingleBoard(board)),
  deletePinning: id => dispatch(deletePinning(id)),
  removeBoard: id => dispatch(removeBoard(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
