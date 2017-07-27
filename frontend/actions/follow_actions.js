import * as APIUtil from '../util/follow_util';
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const createTeacher = (userId) => dispatch => {
  return APIUtil.createFollow(userId).then(
    teacher => dispatch(receiveFollow(teacher))
  );
};

export const receiveFollow = teacher =>({
  type: RECEIVE_FOLLOW,
  teacher
});

export const removeTeacher = (userId) => dispatch => {
  return APIUtil.destroyFollow(userId).then(
    follow => dispatch(removeFollow(follow))
  );
};

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});
