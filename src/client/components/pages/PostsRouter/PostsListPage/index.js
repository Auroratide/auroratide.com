import React from 'react';
import useAsync from 'Client/utils/use-async';
import { renderIfElse } from 'Client/utils/render-if';
import Loading from 'Client/components/core/Loading';
import PostsContext from 'Client/components/context/PostsContext';
import PostsListPage from './PostsListPage';

const PostsListPageWithLoader = ({ resource, ...props }) => {
  const refreshing = useAsync(resource.refreshList);

  return renderIfElse(refreshing, () =>
    <Loading text='Fetching...' />
  ).elseRender(() =>
    <PostsListPage resource={resource} {...props} />
  );
};

export default PostsContext.withResource(PostsListPageWithLoader);
