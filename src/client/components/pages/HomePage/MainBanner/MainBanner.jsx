import React from 'react';
import Logo from 'Client/components/core/Logo';
import styles from './style';

const MainBanner = () =>
  <section className={styles['main-banner']}>
    <Logo className={styles.logo} />
    <div className={styles.text}>
      <h1>Auroratide</h1>
      <div className={styles.subtitle}>
        <span>Coder</span><span>Writer</span><span>Dreamer</span>
      </div>
    </div>
  </section>;

export default MainBanner;