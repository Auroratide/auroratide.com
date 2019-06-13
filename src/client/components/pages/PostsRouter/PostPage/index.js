import React from 'react';
import useAsync from '@auroratide/use-async';
import { renderIfElse } from 'Client/utils/render-if';
import Loading from 'Client/components/core/Loading';
import PageNotFound from 'Client/components/pages/PageNotFound';
import withId from './with-id';
import PostPage from './PostPage';
import PostsContext from 'Client/components/context/PostsContext';

const PostPageWithLoader = ({ resource, id, ...props }) => {
  const { waiting: refreshingItem } = useAsync(resource.refreshOne)
    .withArgs(id)
    .andCall();
  useAsync(resource.refreshList).andCall();

  const item = resource.item(id);

  return renderIfElse(item, () =>
    <PostPage resource={resource} id={id} isRefreshing={refreshingItem} {...props} />
  ).elseRender(() => renderIfElse(refreshingItem, () =>
    <Loading text='Fetching...' />
  ).elseRender(() =>
    <PageNotFound />
  ));
};

export default withId(PostsContext.withResource(PostPageWithLoader));
