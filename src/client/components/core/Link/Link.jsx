import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import classnames from 'classnames';

const isExternal = link => /http/.test(link);

const renderInternalLink = ( { to, className, children } ) =>  // eslint-disable-line react/prop-types
  <RouterLink to={to} onClick={scroll.toTop} className={classnames(className)}>{children}</RouterLink>;

const renderExternalLink = ( { to, className, children } ) =>  // eslint-disable-line react/prop-types
  <a href={to} className={classnames(className)}>{children}</a>;

const Link = (props) => {
  const to = props.to;
  if(isExternal(to)) {
    return renderExternalLink(props);
  } else {
    return renderInternalLink(props);
  }
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Link;