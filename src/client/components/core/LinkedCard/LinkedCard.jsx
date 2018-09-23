import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Link from 'Client/components/core/Link';
import CircledIcon from 'Client/components/core/CircledIcon';
import classnames from 'classnames';

import styles from './style';

const LinkedCard = ({ to, icon, color, title, children }) =>
  <Link to={to} className={classnames(styles['linked-card'], styles[`color-${color}`])} newTab>
    <article className={styles.card}>
      <CircledIcon icon={icon} color={color} className={styles.icon} />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </article>
  </Link>;

LinkedCard.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.color.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
};

export default LinkedCard;