import PropTypes from 'prop-types';

const routerLocation = PropTypes.shape({
  key: PropTypes.string,
  pathname: PropTypes.string,
  search: PropTypes.string,
  hash: PropTypes.string,
  state: PropTypes.object
});

export default {
  routerLocation,
  ...PropTypes
};