import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from 'Client/components/pages/PageNotFound';
import PostPage from './PostPage';
import PostsListPage from './PostsListPage';

const PostsRouter = ({ match }) =>
  <Switch>
    <Route path={`${match.path}/:id`} component={PostPage} />
    <Route exact path={match.path} component={PostsListPage} />
    <Route component={PageNotFound} />
  </Switch>;

PostsRouter.propTypes = {
  match: PropTypes.routerMatch
};

export default PostsRouter;