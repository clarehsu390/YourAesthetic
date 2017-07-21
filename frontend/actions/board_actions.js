export const RECEIVE_USER_BOARDS = "RECEIVE_USER_BOARDS";
export const RECEIVE_SINGLE_BOARD = "RECEIVE_SINGLE_BOARD";

import * as BoardUtil from '../util/board_util';

export const requestBoards = (userId) => (dispatch)=> {
  return BoardUtil.getUsersBoards(userId).then(
    boards => dispatch(receiveBoards(boards))
  );
};

export const requestSingleBoard = (userId, id) => (dispatch)=> {
  return BoardUtil.getSingleBoard(userId, id).then(
    board => dispatch(receiveSingleBoard(board))
  );
};

export const receiveBoards = (boards) => ({
  type: RECEIVE_USER_BOARDS,
  boards
});

export const receiveSingleBoard = (board) => ({
  type: RECEIVE_SINGLE_BOARD,
  board
});
