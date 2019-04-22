import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import PostsStore from 'Client/store/posts-store';
import ResourceStore from 'Client/store/resource-store';
import Loading from 'Client/components/core/Loading';
import TitleArea from './TitleArea';
import Content from './Content';
import ShareButtons from './ShareButtons';
import Comments from './Comments';
import { renderIfElse } from 'Client/utils/render-if';

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
      <Container.article className={styles['post-page']}>
        <TitleArea title={item.title} color={item.color} icon={item.icon} />
        <ContentArea white className={styles.content}>
          <ShareButtons post={item} />
          {renderIfElse(!item.content && this.props.store.isRefreshing, () =>
            <Loading text='Fetching content...' />
          ).elseRender(() =>
            <Content post={item} similarPosts={similarPosts} />
          )}
          <Comments slug={item.id} />
        </ContentArea>
      </Container.article>
    </DocumentTitle>;
  }
}

PostPage.propTypes = {
  item: PropTypes.post.isRequired,
  store: PropTypes.instanceOf(ResourceStore).isRequired
};

export default PostPage;