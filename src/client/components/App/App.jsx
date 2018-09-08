import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from 'Client/components/core/ErrorBoundary';
import DocumentTitle from 'Client/components/layout/DocumentTitle';

import Page from 'Client/components/layout/Page';
import HomePage from 'Client/components/pages/HomePage';
import DigestsPage from 'Client/components/pages/DigestsPage';
import LegalPage from 'Client/components/pages/LegalPage';
import PageNotFound from 'Client/components/pages/PageNotFound';
import GenericErrorPage from 'Client/components/pages/GenericErrorPage';

const App = () =>
  <ErrorBoundary fallback={GenericErrorPage}>
    <DocumentTitle>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Page>
          <ErrorBoundary fallback={GenericErrorPage}>
            <Switch>
              <Route exact path='/digests' component={DigestsPage} />
              <Route exact path='/legal' component={LegalPage} />
              <Route path='*' component={PageNotFound} />
            </Switch>
          </ErrorBoundary>
        </Page>
      </Switch>
    </DocumentTitle>
  </ErrorBoundary>;

export default App;