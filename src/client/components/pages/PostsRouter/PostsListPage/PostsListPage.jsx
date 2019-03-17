import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import PostsStore from 'Client/store/posts-store';
import ResourceStore from 'Client/store/resource-store';
import PostItem from './PostItem';
import Loading from 'Client/components/core/Loading';
import { renderIfElse } from 'Client/utils/render-if';

class PostsListPage extends React.Component {
  componentDidMount() {
    this.props.postsStore.refreshList();
  }

  render() {
    const postsStore = this.props.postsStore;
    const shouldShowLoading = postsStore.isEmpty && postsStore.isRefreshing;
    return renderIfElse(shouldShowLoading, () =>
      <Loading text='Fetching posts...' />
    ).elseRender(() =>
      <DocumentTitle title='Posts'>
        <Container>
          <ContentArea>
            {postsStore
              .list()
              .sort(PostsStore.sorter().byPublishedDate)
              .map(post => <PostItem post={post} key={post.id} />)}
          </ContentArea>
        </Container>
      </DocumentTitle>
    );
  }
}

PostsListPage.propTypes = {
  postsStore: PropTypes.instanceOf(ResourceStore).isRequired
};

export default PostsListPage;