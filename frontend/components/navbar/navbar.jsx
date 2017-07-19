import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <section className="navbar">
          <h1>Start your aesthetic</h1>
          <button className="logout" onClick={logout}>Logout</button>
          <button className="user">User Profile</button>
          <button className="discover">Discover</button>
        </section>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
}


export default NavBar;
