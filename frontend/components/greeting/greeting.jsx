import React from 'react';
import SessionForm from '../sessions/session_form';

const loginRequired = () => {
  return (<section className='sign-in'>

      <SessionForm />
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
