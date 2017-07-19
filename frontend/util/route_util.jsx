import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      )}/>
  );

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
