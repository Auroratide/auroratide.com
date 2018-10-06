import React from 'react';
import Assets from 'Client/config/assets';
import styles from './style';

const Dots = () =>
  <div className={styles.dots}>
    <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
    <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
    <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
    <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
    <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
    <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
    <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
    <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
    <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
  </div>;

export default Dots;