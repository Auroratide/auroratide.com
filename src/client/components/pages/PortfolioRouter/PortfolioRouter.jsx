import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from 'Client/components/pages/PageNotFound';
import PortfolioItemPage from './PortfolioItemPage';
import PortfolioPage from './PortfolioPage';

const PortfolioRouter = ({ match }) =>
  <Switch>
    <Route path={`${match.path}/:id`} component={PortfolioItemPage} />
    <Route path={`${match.path}`} component={PortfolioPage} />
    <Route component={PageNotFound} />
  </Switch>;

PortfolioRouter.propTypes = {
  match: PropTypes.routerMatch
};

export default PortfolioRouter;