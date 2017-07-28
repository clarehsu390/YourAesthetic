import { connect } from 'react-redux';
import { requestBoards } from '../../actions/board_actions';
import BoardIndex from './board_index';



const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  userProfile: state.userProfile
});

const mapDispatchToProps = (dispatch) => ({
  requestBoards: (userId) => dispatch(requestBoards(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
