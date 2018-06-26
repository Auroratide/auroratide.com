import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Link from 'Client/components/core/Link';
import CircledIcon from 'Client/components/core/CircledIcon';
import classnames from 'classnames';

import styles from './style';

const SiteSectionDescription = ({ to, color, icon, title, description }) =>
  <Link to={to} className={classnames(styles.container, styles[`color-${color}`])}>
    <div className={styles['site-section-description']}>
      <CircledIcon icon={icon} color={color} className={styles.icon} />
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  </Link>;

SiteSectionDescription.propTypes = {
  to: PropTypes.string.isRequired,
  color: PropTypes.color,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string
};

export default SiteSectionDescription;