import { connect } from 'react-redux';
import { requestBoards } from '../../actions/board_actions';
import BoardIndex from './board_index';



const mapStateToProps = ({ boards, currentUser }) => ({
  currentUser,
  boards
});

const mapDispatchToProps = (dispatch) => ({
  requestBoards: (userId) => dispatch(requestBoards(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
