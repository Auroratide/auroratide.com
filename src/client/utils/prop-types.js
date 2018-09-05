import PropTypes from 'prop-types';
import { Component } from 'react';
import Colors from 'Client/config/colors';

const routerLocation = PropTypes.shape({
  key: PropTypes.string,
  pathname: PropTypes.string,
  search: PropTypes.string,
  hash: PropTypes.string,
  state: PropTypes.object
});

const color = PropTypes.oneOf(Colors.list());

const digest = PropTypes.shape({
  title: PropTypes.string,
  by: PropTypes.string,
  category: PropTypes.string,
  summary: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
  source: PropTypes.string
});

const component = PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(Component)]);

const tag = PropTypes.oneOfType([PropTypes.string, component]);

export default {
  routerLocation,
  color,
  digest,
  component,
  tag,
  ...PropTypes
};