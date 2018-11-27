import React from 'react';
import PropTypes from 'Client/utils/prop-types';

const ColoredText = ({ color, children }) =>
  <span style={{ color }}>{children}</span>;

ColoredText.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node
};

export default ColoredText;