import React from 'react';
import PropTypes from 'Client/utils/prop-types';

import styles from './style';

const TitleArea = ({ title, image }) =>
  <header className={styles['title-area']} style={{ backgroundImage: `url(${image})`}}>
    <h1 className={styles.title}>{title}</h1>
  </header>;

TitleArea.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
};

export default TitleArea;