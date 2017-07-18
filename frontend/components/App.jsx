import React from 'react';
import SessionFormContainer from './sessions/session_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <header>
    <h1>Your Aesthetic</h1>
    <GreetingContainer />
    <Switch>
      <AuthRoute path="/signup" component={ SessionFormContainer } />
        <AuthRoute path="/login" component={ SessionFormContainer } />
    </Switch>
  </header>
);

export default App;
