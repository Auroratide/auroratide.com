import React from 'react';
import useAsync from '@auroratide/use-async';
import { renderIfElse } from 'Client/utils/render-if';
import Loading from 'Client/components/core/Loading';
import PageNotFound from 'Client/components/pages/PageNotFound';
import withId from './with-id';
import PortfolioItemPage from './PortfolioItemPage';
import PortfolioContext from 'Client/components/context/PortfolioContext';

const PostPageWithLoader = ({ resource, id, ...props }) => {
  const { waiting: refreshingItem } = useAsync(resource.refreshOne)
    .withArgs(id)
    .andCall();

  const item = resource.item(id);

  return renderIfElse(item, () =>
    <PortfolioItemPage item={item} isRefreshing={refreshingItem} {...props} />
  ).elseRender(() => renderIfElse(refreshingItem, () =>
    <Loading text='Fetching...' />
  ).elseRender(() =>
    <PageNotFound />
  ));
};

export default withId(PortfolioContext.withResource(PostPageWithLoader));
