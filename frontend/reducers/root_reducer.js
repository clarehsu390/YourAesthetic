import { combineReducers } from 'redux';
import { currentUserReducer } from './session_reducer';
import errorsReducer from './errors_reducer';
import pinsReducer from './pins_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: errorsReducer,
  pins: pinsReducer
});

export default rootReducer;
