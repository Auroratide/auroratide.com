import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import library from './library';

const RconRenderer = ({ rcon, key }) => {
  if(Array.isArray(rcon)) {
    return rcon.map((elem, i) => RconRenderer({ rcon: elem, key: i }));
  } else if(rcon.c) {
    const component = library[rcon.c] ? library[rcon.c] : rcon.c;
    const props = Object.assign({ key }, rcon.p);

    if(rcon.d) {
      return React.createElement(component, props, RconRenderer({ rcon: rcon.d }));
    } else {
      return React.createElement(component, props);
    }
  } else {
    return rcon;
  }
};

RconRenderer.propTypes = {
  rcon: PropTypes.rcon.isRequired,
  key: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default RconRenderer;