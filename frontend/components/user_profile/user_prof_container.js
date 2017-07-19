import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

export default connect(mapStateToProps, null)(UserProfile);
