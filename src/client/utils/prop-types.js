import PropTypes from 'prop-types';
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
  link: PropTypes.string
});

export default {
  routerLocation,
  color,
  digest,
  ...PropTypes
};