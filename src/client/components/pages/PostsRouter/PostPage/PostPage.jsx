import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import styles from './style';

const PostPage = ({ match }) =>
  <DocumentTitle title='Post'>
    <Container className={styles['post-page']}>
      <ContentArea>
        <p>{`This is some sample content. Should show the ${match.params.id} page.`}</p>
      </ContentArea>
    </Container>
  </DocumentTitle>;

PostPage.propTypes = {
  match: PropTypes.routerMatch
};

export default PostPage;