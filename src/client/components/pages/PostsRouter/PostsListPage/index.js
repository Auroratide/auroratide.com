import React from 'react';
import useAsync from '@auroratide/use-async';
import { renderIfElse } from 'Client/utils/render-if';
import Loading from 'Client/components/core/Loading';
import PostsContext from 'Client/components/context/PostsContext';
import PostsListPage from './PostsListPage';

const PostsListPageWithLoader = ({ resource, ...props }) => {
  const { waiting: refreshing } = useAsync(resource.refreshList).andCall();

  return renderIfElse(refreshing, () =>
    <Loading text='Fetching...' />
  ).elseRender(() =>
    <PostsListPage resource={resource} {...props} />
  );
};

export default PostsContext.withResource(PostsListPageWithLoader);
