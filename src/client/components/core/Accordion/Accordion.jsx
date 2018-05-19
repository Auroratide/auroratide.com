import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import State from './state';
import classnames from 'classnames';

import styles from './style';

const setHeight = (expanded, elem) => {
  elem.style.height = expanded ? `${elem.scrollHeight}px` : null;
};

const Accordion = ({ state, className, children }) =>
  <div
    className={classnames(styles.accordion, { expanded: state.expanded }, className)}
    ref={(elem) => elem ? setHeight(state.expanded, elem) : null}
  >
    {children}
  </div>;

Accordion.propTypes = {
  state: PropTypes.instanceOf(State).isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Accordion;