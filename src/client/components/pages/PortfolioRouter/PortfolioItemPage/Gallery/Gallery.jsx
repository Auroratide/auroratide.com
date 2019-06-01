import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Figure from 'Client/components/core/Figure';
import styles from './style';

const Gallery = ({ images }) =>
  <div className={styles.gallery}>
    {images && images.map(img =>
      <Figure
        className={styles.image}
        src={img.image}
        key={img.image}
        alt={img.caption}
        caption={img.caption}
        size='lg'
      />
    )}
  </div>;

Gallery.propTypes = {
  images: PropTypes.gallery
};

export default Gallery;