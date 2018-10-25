import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import PostsStore from 'Client/store/posts-store';
import DateDisplay from 'Client/components/core/DateDisplay';
import PageNotFound from 'Client/components/pages/PageNotFound';
import RconRenderer from 'Client/components/core/RconRenderer';
import StandardTypography from 'Client/components/layout/StandardTypography';
import Loading from 'Client/components/core/Loading';
import TitleArea from './TitleArea';
import ShareButtons from './ShareButtons';
import Comments from './Comments';
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
          <ContentArea white className={styles.content}>
            <ShareButtons post={post} />
            <DateDisplay className={styles.date} date={new Date(post.publishedAt)} />
            {renderIfElse(!post.content && this.props.postsStore.isRefreshing, () =>
              <Loading text='Fetching content...' />
            ).elseRender(() =>
              <StandardTypography>
                <RconRenderer rcon={post.content || []} />
              </StandardTypography>
            )}
            <Comments slug={post.id} />
          </ContentArea>
        </Container.article>
      </DocumentTitle>
    ).elseRender(() => renderIfElse(this.props.postsStore.isRefreshing, () =>
      <Loading text='Fetching post...' />
    ).elseRender(() =>
      <PageNotFound />
    ));
  }
}

PostPage.propTypes = {
  match: PropTypes.routerMatch.isRequired,
  postsStore: PropTypes.instanceOf(PostsStore).isRequired
};

export default PostPage;