import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import styles from './style';

const DigestItem = ({ digest }) =>
  <article className={styles['digest-item']}>
    <h1 className={styles.title}>{digest.title}</h1>
    <div className={styles.byline}>
      <span className={styles.by}>by {digest.by}</span>
      <span className={styles.bullet}>&bull;</span>
      <span className={styles.category}>{digest.category}</span>
    </div>
    <p className={styles.summary}>{digest.summary}</p>
  </article>;

DigestItem.propTypes = {
  digest: PropTypes.digest.isRequired
};

export default DigestItem;