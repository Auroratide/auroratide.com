import React from 'react';
import Links from 'Client/config/links';
import PropTypes from 'Client/utils/prop-types';
import Link from 'Client/components/core/Link';
import Button from 'Client/components/core/Button';
import Icon from 'Client/components/core/Icon';
import classnames from 'classnames';

import styles from './style';

const buildUrl = (url, title) =>
  `https://twitter.com/intent/tweet?original_referer=${Links.Auroratide.BASE}/&via=tfauroratide&text=${title}&source=tweetbutton&url=${url}`;

const Twitter = ({ url, title, className }) =>
  <Button tag={Link} className={classnames(styles.twitter, className)} to={buildUrl(url, title)} newTab>
    <Icon icon='twitter' />
  </Button>;

Twitter.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
};

export default Twitter;