import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import RconRenderer from 'Client/components/core/RconRenderer';
import Loading from 'Client/components/core/Loading';
import { Content as ArticleContent } from 'Client/components/layout/Article';
import { renderIfElse } from 'Client/utils/render-if';

import styles from './style';

const Content = ({ item, isRefreshing, className }) =>
  <ArticleContent className={className}>
    {renderIfElse(!item.content && isRefreshing, () =>
      <Loading text='Fetching content...' />
    ).elseRender(() =>
      <React.Fragment>
        <span className={styles['minor-title']}>{item.dateRange}</span>
        <RconRenderer rcon={item.summary || []} />
        <hr />
        <RconRenderer rcon={item.content || []} />
      </React.Fragment>
    )}
  </ArticleContent>;

Content.propTypes = {
  item: PropTypes.project.isRequired,
  isRefreshing: PropTypes.bool,
  className: PropTypes.string
};

export default Content;