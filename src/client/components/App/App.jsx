import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from 'Client/components/layout/Page';
import HomePage from 'Client/components/pages/HomePage';
import DigestsPage from 'Client/components/pages/DigestsPage';

const App = () =>
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Page>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/digests' component={DigestsPage} />
    </Page>
  </Switch>;

export default App;