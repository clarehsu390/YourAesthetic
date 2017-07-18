import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS }
  from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {

};

export const currentUserReducer = (
  state = null , action) => {
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        const currentUser = action.currentUser;
        return merge({}, state, {currentUser});
      case RECEIVE_ERRORS:
      const errors = action.errors;
        return merge({}, state, {errors});
      default:
        return state;
      }

};
