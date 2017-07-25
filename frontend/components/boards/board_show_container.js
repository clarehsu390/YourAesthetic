import { connect } from 'react-redux';
import { requestSingleBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  boards: state.boards,
  pins: state.boards.pins
});

const mapDispatchToProps = dispatch => ({
  requestSingleBoard: board => dispatch(requestSingleBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
