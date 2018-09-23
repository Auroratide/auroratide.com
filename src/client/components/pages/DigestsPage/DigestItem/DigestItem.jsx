import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Icon from 'Client/components/core/Icon';
import LinkedCard from 'Client/components/core/LinkedCard';
import styles from './style';

const DigestItem = ({ digest }) =>
  <LinkedCard to={digest.link} icon={digest.icon} color={digest.color} title={digest.title}>
    <div className={styles.byline}>
      <span className={styles.by}>by {digest.by}</span>
      <span className={styles.bullet}>&bull;</span>
      <span className={styles.category}>{digest.category}</span>
    </div>
    <p className={styles.summary}>{digest.summary}</p>
    <small className={styles['read-more']}>
      <Icon icon='chevron-right' className={styles.chevron} /><span>{`Read original at ${digest.source}`}</span>
    </small>
  </LinkedCard>;

DigestItem.propTypes = {
  digest: PropTypes.digest.isRequired
};

export default DigestItem;