import { connect } from 'react-redux';
import { createNewBoard } from '../../actions/board_actions';
import CreateBoard from './create_board';

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});



const mapDispatchToProps = (dispatch) => ({
  createNewBoard: board => dispatch(createNewBoard(board))

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
