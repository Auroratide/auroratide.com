import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import styles from './style';

const Paragraph = ({ children }) =>
  <p className={styles.paragraph}>{children}</p>;

Paragraph.propTypes = {
  children: PropTypes.node
};

export default Paragraph;