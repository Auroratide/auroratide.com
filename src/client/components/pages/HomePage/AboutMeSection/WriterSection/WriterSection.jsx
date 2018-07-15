import React from 'react';
import DotsImage from '../DotsImage';
import styles from './style';

const WriterSection = () =>
  <div className={styles['writer-section']}>
    <div className={styles.text}>
      <h2>I Write</h2>
      <p>I am able to write stuff too.</p>
      <p>I am able to write stuff too.</p>
      <p>I am able to write stuff too.</p>
    </div>
    <div className={styles['image-container']}>
      <DotsImage className={styles.image} />
    </div>
  </div>;

export default WriterSection;