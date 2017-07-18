import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';
const _nullUser = {
  currentUser: "",
  errors: []
};
export const SessionReducer = (state = _nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    console.log(action.currentUser);
    const currentUser = action.currentUser;
    console.log("here");
    const login = merge({}, _nullUser, {currentUser});
    console.log(login);
    return login;
    case RECEIVE_ERRORS:
    const errors = action.errors;
      return merge({}, _nullUser, {errors});
    default:
      return state;
    }

};
