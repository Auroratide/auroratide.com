import PropTypes from 'prop-types';

const routerLocation = PropTypes.shape({
  key: PropTypes.string,
  pathname: PropTypes.string,
  search: PropTypes.string,
  hash: PropTypes.string,
  state: PropTypes.object
});

const digest = PropTypes.shape({
  title: PropTypes.string,
  by: PropTypes.string,
  category: PropTypes.string,
  summary: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string
});

export default {
  routerLocation,
  digest,
  ...PropTypes
};