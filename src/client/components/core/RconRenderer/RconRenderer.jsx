import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { Renderer } from 'md-reactor/rendering';
import library from './library';

const RconRenderer = ({ rcon }) =>
  <Renderer value={rcon} library={library} />;

RconRenderer.propTypes = {
  rcon: PropTypes.rcon.isRequired
};

export default RconRenderer;