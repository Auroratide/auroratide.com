import React from 'react';
import useAsync from '@auroratide/use-async';
import { renderIfElse } from 'Client/utils/render-if';
import Loading from 'Client/components/core/Loading';
import PageNotFound from 'Client/components/pages/PageNotFound';

export default Component => ({ resource, id, ...props }) => {
  const { waiting: refreshingItem } = useAsync(resource.refreshOne)
    .withArgs(id)
    .andCall();

  const item = resource.item(id);

  return renderIfElse(item, () =>
    <Component item={item} resource={resource} id={id} isRefreshing={refreshingItem} {...props} />
  ).elseRender(() => renderIfElse(refreshingItem, () =>
    <Loading text='Fetching...' />
  ).elseRender(() =>
    <PageNotFound />
  ));
};
