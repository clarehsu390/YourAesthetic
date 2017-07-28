import { connect } from 'react-redux';
import Follows from './follows';
import { receiveFollow, removeFollow } from '../../actions/follow_actions';


const mapStateToProps = state => ({
  userProfile: state.userProfile
});

const mapDispatchtoProps = dispatch => ({
  receiveFollow: user => dispatch(receiveFollow(user)),
  removeFollow: follow => dispatch(removeFollow(follow))
});
