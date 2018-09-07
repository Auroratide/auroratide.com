import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { renderIfElse } from 'Client/utils/render-if';
import scroll from 'Client/utils/scroll';
import classnames from 'classnames';

const isExternal = link => /http/.test(link);

const Link = ({ to, newTab, onClick, className, children }) =>
  renderIfElse(isExternal(to), () =>
    <a href={to} target={newTab ? '_blank' : undefined} className={classnames(className)}>{children}</a>
  ).elseRender(() =>
    <RouterLink to={to} onClick={onClick} className={classnames(className)}>{children}</RouterLink>
  );

Link.propTypes = {
  to: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};

Link.defaultProps = {
  onClick: scroll.toTop
};

export default Link;