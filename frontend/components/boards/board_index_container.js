import { connect } from 'react-redux';
import { requestBoards } from '../../actions/board_actions';
import BoardIndex from './board_index';
import { receiveSingleUser } from '../../actions/follow_actions';



const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  userProfile: state.userProfile,
  boards: state.boards
});

const mapDispatchToProps = (dispatch) => ({
  requestBoards: (userId) => dispatch(requestBoards(userId)),
  receiveSingleUser: userId => dispatch(receiveSingleUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
