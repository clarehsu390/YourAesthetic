import * as APIUtil from '../util/follow_util';
import { fetchSingleUser } from '../util/user_util';
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_USER = "RECEIVE_USER";

export const createTeacher = (follow) => dispatch => {
  return APIUtil.createFollow(follow).then(
    teacher => dispatch(receiveFollow(teacher))
  );
};

export const receiveFollow = teacher =>({
  type: RECEIVE_FOLLOW,
  teacher
});

export const removeTeacher = (follow) => dispatch => {
  return APIUtil.destroyFollow(follow).then(
    user => dispatch(receiveUser(user))
  );
};

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const receiveSingleUser = id => dispatch => {
  return fetchSingleUser(id).then(
    user => dispatch(receiveUser(user))
  );
};

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
