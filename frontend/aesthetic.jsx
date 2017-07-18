import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { login, signup, logout } from './util/session_api_util';

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
  ReactDOM.render(<Root store={store} />, root);
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
});
