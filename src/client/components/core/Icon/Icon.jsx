import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

const library = {
  'bars': faBars
};

const Icon = ({ icon, className }) =>
  <FontAwesomeIcon icon={library[icon]} className={classnames(className)} />;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;