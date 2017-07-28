import { connect } from 'react-redux';
import Followers from './followers';
import { receiveFollow, removeFollow, receiveSingleUser } from '../../actions/follow_actions';


const mapStateToProps = state => ({
  students: state.userProfile.students,
  teachers: state.userProfile.teachers,
  followed: state.userProfile.followed
});

const mapDispatchToProps = dispatch => ({
  receiveSingleUser: id => dispatch(receiveSingleUser(id)),
  receiveFollow: user => dispatch(receiveFollow(user)),
  removeFollow: follow => dispatch(removeFollow(follow))
});

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
