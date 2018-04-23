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
      if (!newState.teachers.includes(action.teacher.id)) {

        newState.teachers.push(action.teacher);
      }
      console.log(newState);
      return newState;
    case REMOVE_FOLLOW:

      newState = merge({}, state, { followed: false });
      newState.students[action.follow.id] = null;
      console.log(newState);
      return newState;
    case RECEIVE_USER:
      // console.log(action.user);
      if (action.user.students.includes(action.user)) {

        return merge({}, action.user, { followed: true});
      } else {
        return merge({}, action.user, { followed: false});
      }
    default:
      return state;
  }
};

export default userProfileReducer;
