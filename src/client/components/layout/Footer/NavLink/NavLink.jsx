import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Link from 'Client/components/core/Link';

import styles from './style';

const NavLink = ({ to, name }) =>
  <Link to={to} className={styles['nav-link']}>
    {name}
  </Link>;

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default NavLink;