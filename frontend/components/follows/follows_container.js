import { connect } from 'react-redux';
import Follows from './follows';
import { receiveFollow, removeFollow, receiveSingleUser } from '../../actions/follow_actions';


const mapStateToProps = state => ({
  students: state.userProfile.students,
  teachers: state.userProfile.teachers,
  followed: state.userProfile.followed
});

const mapDispatchToProps = dispatch => ({
  receiveFollow: user => dispatch(receiveFollow(user)),
  removeFollow: follow => dispatch(removeFollow(follow)),
  receiveSingleUser: user => dispatch(receiveSingleUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Follows);
