import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import ContentArea from 'Client/components/layout/ContentArea';
import styles from './style';

const Body = ({ children }) =>
  <ContentArea white>
    <div className={styles.body}>
      {children}
    </div>
  </ContentArea>;

Body.propTypes = {
  children: PropTypes.node
};

export default Body;