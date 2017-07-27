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
import SavedPinContainer from './pins/saved_pins_container';
import BoardIndexContainer from './boards/board_index_container';

const App = () => (
  <div>

    <NavBarContainer />

    <Switch>
      <AuthRoute exact path='/' component={ SignUpContainer }/>
      <AuthRoute path ='/login' component={ LoginContainer } />
    </Switch>
    <Switch>
      <ProtectedRoute exact path='/' component={ PinsIndexContainer } />
      <ProtectedRoute path="/:username" component={ UserProfileContainer }/>
    </Switch>
    <Route exact path='/boards/:boardId' component={ BoardShowContainer } />

    <ProtectedRoute path='/' component={ CreatePinContainer } />

      <Route path={`/:username/pins`}
        component={ SavedPinContainer } />
  </div>
);

export default App;
