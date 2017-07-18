import { connect } from 'react-redux';
import SignUp from './signup';
import { signup } from '../../actions/session_actions';

const mapStateToProps = ({ currentUser }) => ({
  loggedIn: Boolean(currentUser),
  errors: currentUser.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const greeting = ( location === "/") ?
    "Welcome to Your Aesthetic!" : "Sign up to see more";
    return {
      signup: user => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
