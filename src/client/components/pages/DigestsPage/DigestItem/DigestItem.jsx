import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import CircledIcon from 'Client/components/core/CircledIcon';
import Link from 'Client/components/core/Link';
import Icon from 'Client/components/core/Icon';
import styles from './style';

const DigestItem = ({ digest }) =>
  <Link to={digest.link} className={classnames(styles['digest-item-container'], styles[`color-${digest.color}`])} newTab>
    <article className={styles['digest-item']}>
      <CircledIcon icon={digest.icon} color={digest.color} className={styles.icon} />
      <div className={styles.content}>
        <h1 className={styles.title}>{digest.title}</h1>
        <div className={styles.byline}>
          <span className={styles.by}>by {digest.by}</span>
          <span className={styles.bullet}>&bull;</span>
          <span className={styles.category}>{digest.category}</span>
        </div>
        <p className={styles.summary}>{digest.summary}</p>
        <div className={styles['read-more']}>
          <Icon icon='chevron-right' className={styles.chevron} /><span>{`Read original at ${digest.source}`}</span>
        </div>
      </div>
    </article>
  </Link>;

DigestItem.propTypes = {
  digest: PropTypes.digest.isRequired
};

export default DigestItem;