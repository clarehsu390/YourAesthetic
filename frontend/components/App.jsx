import React from 'react';
import SignUpContainer from './signup_form/signup';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
  <header>
    <h1>Your Aesthetic</h1>
    <GreetingContainer />
  </header>
    <Switch>
      <AuthRoute path='/signup' component={ SignUpContainer }/>
    </Switch>
  </div>
);

export default App;
