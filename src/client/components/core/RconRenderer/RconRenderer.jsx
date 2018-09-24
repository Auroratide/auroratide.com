import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import library from './library';

const RconRenderer = ({ rcon }) => {
  if(Array.isArray(rcon)) {
    return rcon.map(elem => RconRenderer({ rcon: elem }));
  } else if(rcon.c) {
    const component = library[rcon.c] ? library[rcon.c] : rcon.c;

    if(rcon.d) {
      return React.createElement(component, rcon.p, RconRenderer({ rcon: rcon.d }));
    } else {
      return React.createElement(component, rcon.p);
    }
  } else {
    return rcon;
  }
};

RconRenderer.propTypes = {
  rcon: PropTypes.rcon.isRequired
};

export default RconRenderer;