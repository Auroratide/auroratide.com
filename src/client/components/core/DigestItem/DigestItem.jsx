import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import Icon from 'Client/components/core/Icon';
import Link from 'Client/components/core/Link';
import styles from './style';

const DigestItem = ({ digest }) =>
  <Link to={digest.link} className={styles['digest-item-container']}>
    <article className={styles['digest-item']}>
      <div className={classnames(styles.icon, styles[`color-${digest.color}`])}>
        <Icon icon={digest.icon} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{digest.title}</h1>
        <div className={styles.byline}>
          <span className={styles.by}>by {digest.by}</span>
          <span className={styles.bullet}>&bull;</span>
          <span className={styles.category}>{digest.category}</span>
        </div>
        <p className={styles.summary}>{digest.summary}</p>
      </div>
    </article>
  </Link>;

DigestItem.propTypes = {
  digest: PropTypes.digest.isRequired
};

export default DigestItem;