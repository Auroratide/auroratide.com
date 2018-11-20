import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DateDisplay from 'Client/components/core/DateDisplay';
import StandardTypography from 'Client/components/layout/StandardTypography';
import RconRenderer from 'Client/components/core/RconRenderer';
import LinkedRelatedPost from './LinkedRelatedPost';

import styles from './style';

const Content = ({ post, similarPosts }) =>
  <div className={styles.content}>
    <div className={styles['content-area']}>
      <DateDisplay className={styles['minor-title']} date={new Date(post.publishedAt)} />
      <StandardTypography>
        <RconRenderer rcon={post.content || []} />
      </StandardTypography>
    </div>
    <aside className={styles.sidebar}>
      <h2 className={styles['more-title']}>More on {post.category}</h2>
      {similarPosts.map(post => <LinkedRelatedPost post={post} key={post.id} />)}
    </aside>
  </div>;

Content.propTypes = {
  post: PropTypes.post.isRequired,
  similarPosts: PropTypes.arrayOf(PropTypes.post)
};

Content.defaultProps = {
  similarPosts: []
};

export default Content;