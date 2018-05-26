import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import library from './library';

const Icon = ({ icon, className }) =>
  <FontAwesomeIcon icon={library[icon]} className={classnames(className)} />;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;