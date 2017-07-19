import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

const loginRequired = () => {
  return (<section className='sign-in'>
  </section>
);
};

const logoutButton = (logout) => (
  <header>
    <h1>Start your aesthetic</h1>
    <button className="logout" onClick={logout}>Logout!</button>
  </header>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? logoutButton(logout) : loginRequired()
);

export default Greeting;
