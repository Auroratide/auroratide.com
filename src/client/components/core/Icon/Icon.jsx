import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import library from './library';

const Icon = ({ icon, className, style }) =>
  <FontAwesomeIcon icon={library[icon]} className={classnames(className)} style={style} />;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Icon;