import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleDiscoverClick = this.handleDiscoverClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleUserClick(e) {
    const { currentUser } = this.props;
    this.props.history.push(`/${currentUser.id}/`);
  }

  handleDiscoverClick(e) {
    this.props.history.push("/");
  }

  componentWillUnmount() {
    this.props.history.push("/");
  }

  render(){
    const { currentUser, logout } = this.props;
    if (currentUser){
      return (
        <section className="navbar">
          <h1 onClick={this.handleDiscoverClick}><img src="http://res.cloudinary.com/dwetqmwgw/image/upload/c_scale,q_100,w_87/v1501170188/Aesthetic_v7ua52.png">
          </img></ h1>
          <input type="text" className="search" placeholder="Search"/>
            <i className="fa fa-user fa-2x"
              aria-hidden="true"
              onClick={this.handleUserClick}>
            </i>
            <i className="fa fa-safari fa-2x"
              aria-hidden="true"
              onClick={this.handleDiscoverClick}>
            </i>
          <i className="fa fa-sign-out fa-2x"
            aria-hidden="true"
            onClick={this.handleClick}>

          </i>
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
