import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Loading from 'Client/components/core/Loading';
import ShareButtons from './ShareButtons';
import RelatedPosts from './RelatedPosts';
import DateDisplay from 'Client/components/core/DateDisplay';
import RconRenderer from 'Client/components/core/RconRenderer';
import Comments from './Comments';
import { renderIfElse } from 'Client/utils/render-if';
import { filter, sorter } from 'Client/components/context/PostsContext';
import classnames from 'classnames';

import Article, {
  Header,
  ButtonBar,
  Body,
  Content,
  Aside
} from 'Client/components/layout/Article';

import styles from './style';

const PostPage = ({ resource, id, isRefreshing }) => {
  const item = resource.item(id);
  const similarPosts = item ? resource.list()
    .filter(filter.without(item.id))
    .filter(filter.withCategory(item.category))
    .sort(sorter.byPublishedDate)
    .filter(filter.top(5)) : [];
  
  const isPublished = !!item.publishedAt;

  return <DocumentTitle title={item.title}>
    <Article>
      <Header title={item.title} color={item.color} icon={item.icon} />
      <ButtonBar>
        <ShareButtons post={item} />
      </ButtonBar>
      <Body>
        <Content>
          {renderIfElse(!item.content && isRefreshing, () =>
            <Loading text='Fetching content...' />
          ).elseRender(() =>
            <>
              {renderIfElse(isPublished, () =>
                <DateDisplay className={styles['minor-title']} date={new Date(item.publishedAt)} />
              ).elseRender(() =>
                <span className={classnames(styles['minor-title'], styles.warning)}>Not Published</span>
              )}
              <RconRenderer rcon={item.content || []} />
            </>
          )}
        </Content>
        <Aside title={`More on ${item.category}`}>
          <RelatedPosts posts={similarPosts} />
        </Aside>
        <Comments slug={item.id} />
      </Body>
    </Article>
  </DocumentTitle>;
};

PostPage.propTypes = {
  resource: PropTypes.shape({
    list: PropTypes.func,
    item: PropTypes.func
  }),
  id: PropTypes.string,
  isRefreshing: PropTypes.bool
};

export default PostPage;