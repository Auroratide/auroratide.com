import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import PostsStore from 'Client/store/posts-store';
import PostItem from './PostItem';

class PostsListPage extends React.Component {
  componentDidMount() {
    this.props.postsStore.refreshPostsList();
  }

  render() {
    return <DocumentTitle title='Posts'>
      <Container>
        <ContentArea>
          {this.props.postsStore.getPostsList().map(post => <PostItem post={post} key={post.id} />)}
        </ContentArea>
      </Container>
    </DocumentTitle>;
  }
}

PostsListPage.propTypes = {
  postsStore: PropTypes.instanceOf(PostsStore).isRequired
};

export default PostsListPage;