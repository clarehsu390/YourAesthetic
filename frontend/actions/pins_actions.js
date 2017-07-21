import * as PinsUtil from '../util/pins_util';

export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const CREATE_PIN = "CREATE_PIN";

export const requestAllPins = () => dispatch =>{
  return PinsUtil.getAllPins().then(
    pins => dispatch(receiveAllPins(pins))
  );
};

export const requestPin = (pin) => dispatch => {
  return PinsUtil.getPin(pin).then(
    pin => dispatch(receivePin(pin))
  );
};

export const newPin = pin => dispatch => {
  return PinsUtil.createPin(pin).then(
    pin => dispatch(receivePin(pin))
  );
};

export const receiveAllPins = (pins) => ({
  type: RECEIVE_ALL_PINS,
  pins
});

export const receivePin = (pin) => ({
  type: RECEIVE_PIN,
  pin
});

export const createPin = (pin) => ({
  type: CREATE_PIN,
  pin
});
