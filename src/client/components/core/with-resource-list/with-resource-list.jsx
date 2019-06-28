import React from 'react';
import useAsync from '@auroratide/use-async';
import { renderIfElse } from 'Client/utils/render-if';
import Loading from 'Client/components/core/Loading';

export default Component => ({ resource, ...props }) => {
  const { waiting: refreshing } = useAsync(resource.refreshList).andCall();
  const list = resource.list();
  
  return renderIfElse(refreshing && list.length === 0, () =>
    <Loading text='Fetching...' />
  ).elseRender(() =>
    <Component resource={resource} list={list} {...props} />
  );
};
