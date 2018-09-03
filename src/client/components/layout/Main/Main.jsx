import React from 'react';
import PropTypes from 'Client/utils/prop-types';

const Main = ({ children }) =>
  <main role='main'>
    {children}
  </main>;

Main.propTypes = {
  children: PropTypes.node
};

export default Main;