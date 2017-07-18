import React from 'react';
import SignUpContainer from './signup_form/signup_container';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './login_form/login_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
  <header>
    <h1>Your Aesthetic</h1>
  </header>
    <Switch>
      <AuthRoute path='/signup' component={ SignUpContainer }/>
      <AuthRoute path ='/login' component={ LoginContainer } />
    </Switch>
  </div>
);

export default App;
