import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleUserClick(e) {
    const { currentUser } = this.props;
    this.props.history.push(`/${currentUser.username}`);
  }

  componentWillUnmount() {
    this.props.history.push("/");
  }

  render(){
    const { currentUser, logout } = this.props;
    if (currentUser){
      return (
        <section className="navbar">
          <h1>Start your aesthetic</h1>
          <button className="logout"
            onClick={this.handleClick}>
              Logout
          </button>
          <button
            className="user"
              onClick={this.handleUserClick}>
                User Profile
            </button>
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


export default withRouter(NavBar);
