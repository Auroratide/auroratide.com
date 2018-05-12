import React from 'react';
import styles from './style.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'Client/components/pages/HomePage';
import DigestsPage from 'Client/components/pages/DigestsPage';

const App = () =>
  <div className={styles.app}>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/digests' component={DigestsPage} />
    </Switch>
  </div>;

export default App;