import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import PostsStore from 'Client/store/posts-store';

class PostsListPage extends React.Component {
  componentDidMount() {
    this.props.postsStore.refreshPostsList();
  }

  render() {
    return <DocumentTitle title='Posts'>
      <Container>
        <ContentArea>
          {this.props.postsStore.getPostsList().map(post => <p key={post.id}>{post.title}</p>)}
        </ContentArea>
      </Container>
    </DocumentTitle>;
  }
}

PostsListPage.propTypes = {
  postsStore: PropTypes.instanceOf(PostsStore).isRequired
};

export default PostsListPage;