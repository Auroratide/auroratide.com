import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import PostsStore from 'Client/store/posts-store';
import ResourceStore from 'Client/store/resource-store';
import PostItem from './PostItem';

const PostsListPage = ({ store }) =>
  <DocumentTitle title='Posts'>
    <Container>
      <ContentArea>{store
        .list()
        .sort(PostsStore.sorter().byPublishedDate)
        .map(post => <PostItem post={post} key={post.id} />)
      }</ContentArea>
    </Container>
  </DocumentTitle>;

PostsListPage.propTypes = {
  store: PropTypes.instanceOf(ResourceStore).isRequired
};

export default PostsListPage;