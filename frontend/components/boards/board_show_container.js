import { connect } from 'react-redux';
import { requestSingleBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mapStateToProps = ({ state }) => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestBoard: board => dispatch(requestSingleBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
