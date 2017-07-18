import React from 'react';
import SessionFormContainer from './sessions/session_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <header>
    <h1>Your Aesthetic</h1>
    <Switch>
      <AuthRoute path="/" component={SessionFormContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
    </Switch>
  </header>
);

export default App;
