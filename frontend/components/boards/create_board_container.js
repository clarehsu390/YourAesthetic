import { connect } from 'react-redux';
import { createNewBoard } from '../../actions/board_actions';
import { receiveSingleUser } from '../../actions/follow_actions';
import CreateBoard from './create_board';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});



const mapDispatchToProps = (dispatch) => ({
  createNewBoard: board => dispatch(createNewBoard(board)),
  receiveSingleUser: user => dispatch(receiveSingleUser(user))

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
