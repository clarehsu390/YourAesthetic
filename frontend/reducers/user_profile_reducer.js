import { RECEIVE_FOLLOW, REMOVE_FOLLOW, RECEIVE_USER } from '../actions/follow_actions';
import merge from 'lodash/merge';

const defaultProfile = {
  id: null,
  username: "",
  teachers: [],
  students: [],
  followed: false
};


const userProfileReducer = (state = defaultProfile, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FOLLOW:
      let newState = merge({}, state, { followed: true } );

    return newState;
    case REMOVE_FOLLOW:
      delete state.teachers[action.follow.teacher_id];
      return merge({}, state, {followed: false});
    case RECEIVE_USER:
      return merge({}, state, action.user);
    default:
      return state;
  }
};

export default userProfileReducer;
