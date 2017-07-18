import React from 'react';
import SignUpContainer from './signup_form/signup_container';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './login_form/login_container';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
  <header>
    <h1>Your Aesthetic</h1>
    <GreetingContainer />
  </header>
    <Switch>
      <Route path='/signup' component={ SignUpContainer }/>
      <Route path ='/login' component={ LoginContainer } />
    </Switch>
  </div>
);

export default App;
