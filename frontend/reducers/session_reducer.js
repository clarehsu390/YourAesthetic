import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS }
  from '../actions/session_actions';
import merge from 'lodash/merge';


export const currentUserReducer = (
  state = null , action) => {
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        const user = action.user;
        console.log(user);
        // return merge({}, state, user);
        return user;
      // case RECEIVE_ERRORS:
      // const errors = action.errors;
      //   return errors;
      default:
        return state;
      }

};
