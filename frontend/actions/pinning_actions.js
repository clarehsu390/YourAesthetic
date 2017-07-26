import { receiveSingleBoard } from './board_actions';
import { receivePin } from './pins_actions';
import * as APIUtil from '../util/pinning_util';

export const createPinning = (pinning) => (dispatch) => {
  return APIUtil.addPinning(pinning);
};

export const deletePinning = (pinId, boardId) => (dispatch) => {
  return APIUtil.removePinning(pinId, boardId).then(
    board => dispatch(receiveSingleBoard(board))
  );
};
