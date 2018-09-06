import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from 'Client/components/layout/Page';
import HomePage from 'Client/components/pages/HomePage';
import DigestsPage from 'Client/components/pages/DigestsPage';
import PageNotFound from 'Client/components/pages/PageNotFound';

const App = () =>
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Page>
      <Switch>
        <Route exact path='/digests' component={DigestsPage} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </Page>
  </Switch>;

export default App;