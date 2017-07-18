import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ currentUser }) => ({
  loggedIn: Boolean(currentUser),
  errors: currentUser.errors
});

const mapDispatchToProps = (dispatch, { location }) => ({
      login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
