import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

const loginRequired = () => {
  return (<section className='sign-in'>
  </section>
);
};

const logoutButton = (logout) => (
  <section>
    <h1>Start your aesthetic</h1>
    <button className="logout" onClick={logout}>Logout!</button>
    <button className="user">User Profile</button>
    <button className="discover">Discover</button>
    <Redirect to='/login' />
  </section>
);

const NavBar = ({ currentUser, logout }) => (
  currentUser ? logoutButton(logout) : loginRequired()
);

export default NavBar;
