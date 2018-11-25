import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import styles from './style';

const ImageContainer = ({ title, base64, children }) =>
  <div className={styles['image-container']}>
    <strong className={styles.title}>{title}</strong>
    <div className={styles['controlled-height']}>
      <img className={styles.image} src={base64} />
    </div>
    {children}
  </div>;

ImageContainer.propTypes = {
  title: PropTypes.string,
  base64: PropTypes.string,
  children: PropTypes.node
};

export default ImageContainer;