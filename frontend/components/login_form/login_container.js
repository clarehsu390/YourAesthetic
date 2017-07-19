import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ currentUser, errors }) => ({
  loggedIn: Boolean(currentUser),
  errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const demoUser = {email: "guest", password: "password"};
  return {
      login: user => dispatch(login(user)),
      demo: demoUser => dispatch(login(demoUser))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
