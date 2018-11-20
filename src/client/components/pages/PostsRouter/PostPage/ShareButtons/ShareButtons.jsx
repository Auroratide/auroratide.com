import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { UrlBuilder } from 'Client/config/links';
import Facebook from './Facebook';
import Twitter from './Twitter';

import styles from './style';

const url = post => new UrlBuilder().withBase().post(post.id);

const ShareButtons = ({ post }) =>
  <div className={styles.buttons}>
    <span className={styles.spacing}><Facebook className={styles.button} url={url(post)} /></span>
    <span className={styles.spacing}><Twitter className={styles.button} url={url(post)} title={post.title} /></span>
  </div>;

ShareButtons.propTypes = {
  post: PropTypes.post.isRequired
};

export default ShareButtons;