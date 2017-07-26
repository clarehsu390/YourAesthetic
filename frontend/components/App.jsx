import React from 'react';
import SignUpContainer from './signup_form/signup_container';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './login_form/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from'./navbar/navbar_container';
import UserProfileContainer from './user_profile/user_prof_container';
import PinsIndexContainer from './pins/pinsindex_container';
import CreatePinContainer from './pins/create_pin_container';
import CreateBoardContainer from './boards/create_board_container';
import BoardShowContainer from './boards/board_show_container';


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
    <Route exact path='/' component={ CreatePinContainer } />
    <ProtectedRoute exact path="/boards/:boardId" component={ BoardShowContainer } />

  </div>
);

export default App;
