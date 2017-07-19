import { connect } from 'react-redux';
import SignUp from './signup';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = ({ currentUser, errors }) => ({
  loggedIn: Boolean(currentUser),
  errors
});

const mapDispatchToProps = (dispatch, { location }) => ({
  // const greeting = ( location === "/") ?
  //   "Welcome to Your Aesthetic!" : "Sign up to see more";
      signup: user => dispatch(signup(user)),
      login: user => dispatch(login(user)),
      demo: demoUser => dispatch(login(demoUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
