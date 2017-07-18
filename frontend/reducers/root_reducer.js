import { combineReducers } from 'redux';
import { currentUserReducer } from './session_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer
});

export default rootReducer;
