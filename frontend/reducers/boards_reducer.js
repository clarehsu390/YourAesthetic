import { RECEIVE_USER_BOARDS, RECEIVE_SINGLE_BOARD } from '../actions/board_actions';

const boardsReducer = (
  state = [], action
) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_BOARDS:
    return action.boards;
  case RECEIVE_SINGLE_BOARD:
    return action.board;
  default:
    return state;
  }
};

export default boardsReducer;
