import { receiveSingleBoard } from './board_actions';
import { receivePin } from './pins_actions';
import * as APIUtil from '../util/pinning_util';

export const createPinning = (pinning) => (dispatch) => {
  return APIUtil.addPinning(pinning);
};

export const deletePinning = (pinning) => (dispatch) => {
  return APIUtil.destroyPinning(pinning).then(
    board => dispatch(receiveSingleBoard(board))
  );
};
