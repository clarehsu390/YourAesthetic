import { RECEIVE_ALL_PINS, RECEIVE_PIN } from '../actions/pins_actions';
import merge from 'lodash/merge';

const pinsReducer = (
  state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_ALL_PINS:
        const pins = action.pins;
        return action.pins;
      case RECEIVE_PIN:
        return action.pin;
      default:
        return state;
    }
  };

export default pinsReducer;
