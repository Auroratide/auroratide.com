import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faLinkedinIn,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons';

const library = {
  'bars': faBars,
  'twitter': faTwitter,
  'linked-in': faLinkedinIn,
  'github-alt': faGithubAlt
};

const Icon = ({ icon, className }) =>
  <FontAwesomeIcon icon={library[icon]} className={classnames(className)} />;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;