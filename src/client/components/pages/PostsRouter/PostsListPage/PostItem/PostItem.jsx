import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import LinkedCard from 'Client/components/core/LinkedCard';
import DateDisplay from 'Client/components/core/DateDisplay';
import styles from './style';

const PostItem = ({ post }) =>
  <LinkedCard to={`/posts/${post.id}`} icon={post.icon} color={post.color} title={post.title}>
    <div className={styles.byline}>
      <DateDisplay date={new Date(post.publishedAt)} />
      <span className={styles.bullet}>&bull;</span>
      <span className={styles.category}>{post.category}</span>
    </div>
    <p className={styles.summary}>{post.summary}</p>
  </LinkedCard>;

PostItem.propTypes = {
  post: PropTypes.post.isRequired
};

export default PostItem;