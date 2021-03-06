import * as APIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(
    currentUser => (dispatch(receiveCurrentUser(currentUser)))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)));

};

export const login = user => dispatch => {

  return APIUtil.login(user).then(
    currentUser => (dispatch(receiveCurrentUser(currentUser)))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(
    user => (dispatch(receiveCurrentUser(null))
  )).fail(errors => dispatch(receiveErrors(errors)));
};

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});
