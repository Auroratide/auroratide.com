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

const routerMatch = PropTypes.shape({
  params: PropTypes.object,
  isExact: PropTypes.bool,
  path: PropTypes.string,
  url: PropTypes.string
});

const color = PropTypes.oneOf(Colors.list());

const rcon = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.array,
  PropTypes.shape({
    c: PropTypes.string,
    d: PropTypes.any,
    p: PropTypes.object
  })
]);

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

const post = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  summary: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  publishedAt: PropTypes.string,
  content: rcon
});

const projectDownloadLink = PropTypes.shape({
  title: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.color
});

const project = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  dateRange: PropTypes.string,
  summary: rcon,
  content: rcon,
  links: PropTypes.arrayOf(projectDownloadLink)
});

const component = PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(Component)]);

const tag = PropTypes.oneOfType([PropTypes.string, component]);

export default {
  routerLocation,
  routerMatch,
  color,
  rcon,
  digest,
  post,
  projectDownloadLink,
  project,
  component,
  tag,
  ...PropTypes
};