import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) =>
  <main role='main'>
    {children}
  </main>;

Main.propTypes = {
  children: PropTypes.node
};

export default Main;