import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Icon from 'Client/components/core/Icon';

import styles from './style';

const SiteSectionDescription = ({ icon, title, description }) =>
  <div className={styles['site-section-description']}>
    <div className={styles.text}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <Icon icon={icon} className={styles.icon} />
  </div>;

SiteSectionDescription.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string
};

export default SiteSectionDescription;