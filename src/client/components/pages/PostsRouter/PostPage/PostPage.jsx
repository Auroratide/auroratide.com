import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import PostsStore from 'Client/store/posts-store';
import ResourceStore from 'Client/store/resource-store';
import Loading from 'Client/components/core/Loading';
import ShareButtons from './ShareButtons';
import RelatedPosts from './RelatedPosts';
import DateDisplay from 'Client/components/core/DateDisplay';
import RconRenderer from 'Client/components/core/RconRenderer';
import Comments from './Comments';
import { renderIfElse } from 'Client/utils/render-if';

import Article, {
  Header,
  ButtonBar,
  Body,
  Content,
  Aside
} from 'Client/components/layout/Article';

import styles from './style';

class PostPage extends React.Component {
  componentDidMount() {
    this.props.store.refreshList();
  }

  render() {
    const item = this.props.item;
    const similarPosts = item ? this.props.store.list()
      .filter(PostsStore.filter().without(item.id))
      .filter(PostsStore.filter().withCategory(item.category))
      .sort(PostsStore.sorter().byPublishedDate)
      .filter(PostsStore.filter().top(5)) : [];
    
    return <DocumentTitle title={item.title}>
      <Article>
        <Header title={item.title} color={item.color} icon={item.icon} />
        <ButtonBar>
          <ShareButtons post={item} />
        </ButtonBar>
        <Body>
          <Content>
            {renderIfElse(!item.content && this.props.store.isRefreshing, () =>
              <Loading text='Fetching content...' />
            ).elseRender(() =>
              <React.Fragment>
                <DateDisplay className={styles['minor-title']} date={new Date(item.publishedAt)} />
                <RconRenderer rcon={item.content || []} />
                <Comments slug={item.id} />
              </React.Fragment>
            )}
          </Content>
          <Aside title={`More on ${item.category}`}>
            <RelatedPosts posts={similarPosts} />
          </Aside>
        </Body>
      </Article>
    </DocumentTitle>;
  }
}

PostPage.propTypes = {
  item: PropTypes.post.isRequired,
  store: PropTypes.instanceOf(ResourceStore).isRequired
};

export default PostPage;