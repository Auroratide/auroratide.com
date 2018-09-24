import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import PostsStore from 'Client/store/posts-store';
import DateDisplay from 'Client/components/core/DateDisplay';
import PageNotFound from 'Client/components/pages/PageNotFound';
import RconRenderer from 'Client/components/core/RconRenderer';
import TitleArea from './TitleArea';
import { renderIfElse } from 'Client/utils/render-if';

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

    return renderIfElse(post, () =>
      <DocumentTitle title={post.title}>
        <Container.article className={styles['post-page']}>
          <TitleArea title={post.title} color={post.color} icon={post.icon} />
          <ContentArea white>
            <DateDisplay className={styles.date} date={new Date(post.publishedAt)} />
            <RconRenderer rcon={post.content || []} />
          </ContentArea>
        </Container.article>
      </DocumentTitle>
    ).elseRender(() =>
      <PageNotFound />
    );
  }
}

PostPage.propTypes = {
  match: PropTypes.routerMatch.isRequired,
  postsStore: PropTypes.instanceOf(PostsStore).isRequired
};

export default PostPage;