import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS }
  from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: "",
  errors: []
};

export const currentUserReducer = (state = _nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
    const login = merge({}, _nullUser, {currentUser});
    return login;
    case RECEIVE_ERRORS:
    const errors = action.errors;
      return merge({}, _nullUser, {errors});
    default:
      return state;
    }

};
