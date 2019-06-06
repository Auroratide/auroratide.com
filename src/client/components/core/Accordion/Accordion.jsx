import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';

import styles from './style';

const setHeight = (expanded, elem) => {
  elem.style.height = expanded ? `${elem.scrollHeight}px` : null;
};

const Accordion = ({ expanded, className, children }) =>
  <div
    className={classnames(styles.accordion, { expanded }, className)}
    ref={(elem) => elem ? setHeight(expanded, elem) : null}
  >
    {children}
  </div>;

Accordion.propTypes = {
  expanded: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Accordion;