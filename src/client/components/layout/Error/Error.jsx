import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';

import styles from './style';

const Error = ({ title, subtitle, children }) =>
  <Container className={styles.error}>
    <ContentArea>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <div className={styles.content}>
        {children}
      </div>
    </ContentArea>
  </Container>;

Error.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
};

export default Error;