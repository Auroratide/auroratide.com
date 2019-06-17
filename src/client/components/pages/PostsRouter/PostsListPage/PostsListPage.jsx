import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import { sorter, filter } from 'Client/components/context/PostsContext';
import PostItem from './PostItem';

const PostsListPage = ({ resource }) =>
  <DocumentTitle title='Posts'>
    <Container>
      <ContentArea>{resource
        .list()
        .filter(filter.published())
        .sort(sorter.byPublishedDate)
        .map(post => <PostItem post={post} key={post.id} />)
      }</ContentArea>
    </Container>
  </DocumentTitle>;

PostsListPage.propTypes = {
  resource: PropTypes.shape({
    list: PropTypes.func
  })
};

export default PostsListPage;