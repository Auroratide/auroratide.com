import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from 'Client/components/pages/PageNotFound';
import ProjectPage from './ProjectPage';
import ProjectsListPage from './ProjectsListPage';

const ProjectsRouter = ({ match }) =>
  <Switch>
    <Route path={`${match.path}/:id`} component={ProjectPage} />
    <Route path={`${match.path}`} component={ProjectsListPage} />
    <Route component={PageNotFound} />
  </Switch>;

ProjectsRouter.propTypes = {
  match: PropTypes.routerMatch
};

export default ProjectsRouter;