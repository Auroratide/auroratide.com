import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Links from 'Client/config/links';
import Link from 'Client/components/core/Link';
import Icon from 'Client/components/core/Icon';
import classnames from 'classnames';

import styles from './style';

const LinkedRelatedPost = ({ post }) =>
  <Link to={`${Links.Auroratide.POSTS}/${post.id}`} className={classnames(styles['linked-related-post'], styles[`color-${post.color}`])}>
    <Icon icon={post.icon} className={styles.icon} />
    <span className={styles.title}>{post.title}</span>
  </Link>;

LinkedRelatedPost.propTypes = {
  post: PropTypes.post.isRequired
};

export default LinkedRelatedPost;