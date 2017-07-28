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
      newState.teachers.push(action.teacher);
      return newState;
    case REMOVE_FOLLOW:

      newState = merge({}, state, { followed: false });
      newState.teachers[action.follow.id] = null;
      return newState;
    case RECEIVE_USER:
      return merge(action.user, { followed: false});
    default:
      return state;
  }
};

export default userProfileReducer;
