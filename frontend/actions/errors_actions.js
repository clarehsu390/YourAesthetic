export const ADD_ERRORS = "ADD_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveErrors = errors => ({
  type: ADD_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  errors: []

});
