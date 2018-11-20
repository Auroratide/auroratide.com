import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { UrlBuilder } from 'Client/config/links';
import Link from 'Client/components/core/Link';
import Logo from 'Client/components/core/Logo';

import styles from './style';

const LogoLink = ({ onClick }) =>
  <Link to={new UrlBuilder().home()} onClick={onClick} className={styles['logo-link']}>
    <Logo className={styles.logo} />
  </Link>;

LogoLink.propTypes = {
  onClick: PropTypes.func
};

export default LogoLink;