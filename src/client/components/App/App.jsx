import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from 'Client/components/core/ErrorBoundary';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Links from 'Client/config/links';
import Colors from 'Client/config/colors';

import Page from 'Client/components/layout/Page';
import HomePage from 'Client/components/pages/HomePage';
import PostsRouter from 'Client/components/pages/PostsRouter';
import PortfolioRouter from 'Client/components/pages/PortfolioRouter';
import DigestsPage from 'Client/components/pages/DigestsPage';
import LegalPage from 'Client/components/pages/LegalPage';
import WhodokuPage from 'Client/components/pages/WhodokuPage';
import PageNotFound from 'Client/components/pages/PageNotFound';
import GenericErrorPage from 'Client/components/pages/GenericErrorPage';

const getTheme = pathname => {
  if(pathname && pathname.indexOf(Links.Auroratide.POSTS) === 0) {
    return Colors.AURORA_BLUE.name;
  } else if(pathname && pathname.indexOf(Links.Auroratide.DIGESTS) === 0) {
    return Colors.AURORA_GREEN.name;
  } else {
    return Colors.AURORA_BLUE.name;
  }
};

const App = ({ location }) =>
  <ErrorBoundary fallback={GenericErrorPage}>
    <DocumentTitle>
      <Switch>
        <Route exact path={Links.Auroratide.HOME} component={HomePage} />
        <Page theme={location && getTheme(location.pathname)}>
          <ErrorBoundary fallback={GenericErrorPage}>
            <Switch>
              <Route path={Links.Auroratide.POSTS} component={PostsRouter} />
              <Route path={Links.Auroratide.PORTFOLIO} component={PortfolioRouter} />
              <Route exact path={Links.Auroratide.DIGESTS} component={DigestsPage} />
              <Route exact path={Links.Auroratide.LEGAL} component={LegalPage} />
              <Route exact path={Links.Auroratide.WHODOKU} component={WhodokuPage} />
              <Route path='*' component={PageNotFound} />
            </Switch>
          </ErrorBoundary>
        </Page>
      </Switch>
    </DocumentTitle>
  </ErrorBoundary>;

App.propTypes = {
  location: PropTypes.routerLocation
};

export default App;