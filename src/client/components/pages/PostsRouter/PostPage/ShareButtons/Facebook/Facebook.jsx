import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Link from 'Client/components/core/Link';
import Button from 'Client/components/core/Button';
import Icon from 'Client/components/core/Icon';
import classnames from 'classnames';

import styles from './style';

const buildUrl = url => `https://www.facebook.com/sharer/sharer.php?u=${url}`;

const Facebook = ({ url, className }) =>
  <Button tag={Link} className={classnames(styles.facebook, className)} to={buildUrl(url)} newTab>
    <Icon icon='facebook' />
  </Button>;

Facebook.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string
};

export default Facebook;