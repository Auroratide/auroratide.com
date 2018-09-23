import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import PostsStore from 'Client/store/posts-store';

const PostsListPage = () =>
  <DocumentTitle title='Posts'>
    <Container>
      <ContentArea>
        <p>Nothing right now.</p>
      </ContentArea>
    </Container>
  </DocumentTitle>;

PostsListPage.propTypes = {
  postsStore: PropTypes.instanceOf(PostsStore).isRequired
};

export default PostsListPage;