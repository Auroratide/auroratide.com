import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { Link as RouterLink } from 'react-router-dom';
import classnames from 'classnames';

const isExternal = link => /http/.test(link);

const renderInternalLink = ( { to, className, onClick, children } ) =>  // eslint-disable-line react/prop-types
  <RouterLink to={to} onClick={onClick} className={classnames(className)}>{children}</RouterLink>;

const renderExternalLink = ( { to, newTab, className, children } ) =>  // eslint-disable-line react/prop-types
  <a href={to} target={newTab ? '_blank' : undefined} className={classnames(className)}>{children}</a>;

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
  newTab: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Link;