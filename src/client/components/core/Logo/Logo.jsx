import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Assets from 'Client/config/assets';

const Logo = ({ className }) =>
  <img src={Assets.Logo.NO_BACK} className={classnames(className)} alt='A' />;

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;