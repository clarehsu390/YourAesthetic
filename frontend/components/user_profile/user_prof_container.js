import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { receiveSingleUser } from '../../actions/follow_actions';
import { createTeacher, removeTeacher } from '../../actions/follow_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.currentUser),
  currentUser: state.currentUser,
  userProfile: state.userProfile
});

const mapDispatchToProps = dispatch => ({
  receiveSingleUser: id => dispatch(receiveSingleUser(id)),
  createTeacher: (follow) => dispatch(createTeacher(follow)),
  removeTeacher: (follow) => dispatch(removeTeacher(follow))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
