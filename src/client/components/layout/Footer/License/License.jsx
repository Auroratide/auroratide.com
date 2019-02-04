import React from 'react';
import { currentYear } from 'Client/utils/date';
import styles from './style';

const License = () =>
  <p className={styles.license}>&copy; {currentYear()} Timothy Foster, All Rights Reserved</p>;

export default License;
