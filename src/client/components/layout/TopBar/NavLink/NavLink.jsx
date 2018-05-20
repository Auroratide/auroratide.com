import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Link from 'Client/components/core/Link';
import classnames from 'classnames';

import styles from './style';

const isOnPage = (location, name) => location && location.pathname.includes(`/${name.toLowerCase()}`);

const NavLink = ({ name, location, onClick }) =>
  <Link
    to={`/${name.toLowerCase()}`}
    onClick={onClick}
    className={classnames(
      styles['nav-link'],
      { [styles.active]: isOnPage(location, name) }
    )}
  >
    {name}
  </Link>;

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.routerLocation,
  onClick: PropTypes.func
};

export default NavLink;