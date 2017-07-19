import { combineReducers } from 'redux';
import { currentUserReducer } from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: errorsReducer
});

export default rootReducer;
