import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { createPin } from './util/pins_util';
import { requestSingleBoard } from './actions/board_actions';
import { createPinning } from './actions/pinning_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = { currentUser: window.currentUser } ;
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.requestSingleBoard = requestSingleBoard;
  window.createPinning = createPinning;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);


});
