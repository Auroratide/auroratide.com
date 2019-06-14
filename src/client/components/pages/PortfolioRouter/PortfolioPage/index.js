import React from 'react';
import useAsync from '@auroratide/use-async';
import { renderIfElse } from 'Client/utils/render-if';
import Loading from 'Client/components/core/Loading';
import PortfolioContext from 'Client/components/context/PortfolioContext';
import PortfolioPage from './PortfolioPage';

const WithLoader = ({ resource, ...props }) => {
  const { waiting: refreshing } = useAsync(resource.refreshList).andCall();

  return renderIfElse(refreshing, () =>
    <Loading text='Fetching...' />
  ).elseRender(() =>
    <PortfolioPage resource={resource} {...props} />
  );
};

export default PortfolioContext.withResource(WithLoader);
