import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import PostsStore from 'Client/store/posts-store';
import { renderIf } from 'Client/utils/render-if';

import styles from './style';

class PostPage extends React.Component {
  componentDidMount() {
    this.props.postsStore.refreshPostDetails(this.getPostId());
  }

  getPostId = () => {
    return this.props.match.params.id;
  }

  render() {
    const post = this.props.postsStore.getPost(this.getPostId());

    return renderIf(post, () =>
      <DocumentTitle title='Post'>
        <Container className={styles['post-page']}>
          <ContentArea>
            <p>{post.title}</p>
          </ContentArea>
        </Container>
      </DocumentTitle>
    );
  }
}

PostPage.propTypes = {
  match: PropTypes.routerMatch.isRequired,
  postsStore: PropTypes.instanceOf(PostsStore).isRequired
};

export default PostPage;