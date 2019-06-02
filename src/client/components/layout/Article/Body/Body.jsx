import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import ContentArea from 'Client/components/layout/ContentArea';
import classnames from 'classnames';
import styles from './style';

const Body = ({ children, className }) =>
  <ContentArea white>
    <div className={classnames(styles.body, className)}>
      {children}
    </div>
  </ContentArea>;

Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Body;