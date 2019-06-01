import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import styles from './style';

const Aside = ({ title, children, className }) =>
  <aside className={classnames(styles.aside, className)}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </aside>;

Aside.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Aside;