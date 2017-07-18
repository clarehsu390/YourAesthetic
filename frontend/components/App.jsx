import React from 'react';
import SessionFormContainer from './sessions/session_form_container';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <header>
    <h1>Your Aesthetic</h1>
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />
    </Switch>
  </header>
);

export default App;
