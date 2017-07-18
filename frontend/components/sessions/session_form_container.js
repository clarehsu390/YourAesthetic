import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ currentUser, errors }, ownProps) => ({
  loggedIn: Boolean(currentUser),
  errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
    const processForm = ( formType === 'login' ) ? login : signup;
    return {
      processForm: user => dispatch(login(user)),
      formType
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
