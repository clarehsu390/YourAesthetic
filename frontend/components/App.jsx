import React from 'react';
import SignUpContainer from './signup_form/signup_container';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './login_form/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from'./navbar/navbar_container';
import UserProfileContainer from './user_profile/user_prof_container';
import PinsIndexContainer from './pins/pinsindex_container';

const App = () => (
  <div>

    <NavBarContainer />

    <Switch>
      <AuthRoute exact path='/' component={ SignUpContainer }/>
      <AuthRoute path ='/login' component={ LoginContainer } />
      <ProtectedRoute path="/:username" component={ UserProfileContainer }/>
      <ProtectedRoute path='/' component= { NavBarContainer } />
    </Switch>
    <Route exact path='/' component={ PinsIndexContainer } />

  </div>
);

export default App;
