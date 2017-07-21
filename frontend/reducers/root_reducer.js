import { combineReducers } from 'redux';
import { currentUserReducer } from './session_reducer';
import errorsReducer from './errors_reducer';
import pinsReducer from './pins_reducer';
import boardsReducer from './boards_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: errorsReducer,
  boards: boardsReducer,
  pins: pinsReducer,
});

export default rootReducer;
