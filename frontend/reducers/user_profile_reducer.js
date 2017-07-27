import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
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
      return merge({followed: true}, state.students, action.user);
    case REMOVE_FOLLOW:
      delete state.students[action.follow.student_id];
      return merge(state, {followed: false}, state.students);
    default:
      return state;
  }
};

export default userProfileReducer;
