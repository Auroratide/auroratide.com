import React from 'react';
import styles from './style.css';
import { Switch, Route } from 'react-router-dom';

import Page from 'Client/components/layout/Page';
import HomePage from 'Client/components/pages/HomePage';
import DigestsPage from 'Client/components/pages/DigestsPage';

const App = () =>
  <div className={styles.app}>
    <Page>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/digests' component={DigestsPage} />
      </Switch>
    </Page>
  </div>;

export default App;