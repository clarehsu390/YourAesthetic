import React from 'react';
import SessionFormContainer from '../sessions/session_form_container';
import SessionForm from '../sessions/session_form';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

const loginRequired = () => {
  return (<section className='sign-in'>

  </section>
);
};

const logoutButton = (logout) => (
  <header>
    <button className="logout" onClick={logout}>Logout!</button>
  </header>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? logoutButton(logout) : loginRequired()
);

export default Greeting;
