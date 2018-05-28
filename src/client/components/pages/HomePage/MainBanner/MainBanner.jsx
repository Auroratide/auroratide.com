import React from 'react';
import Container from 'Client/components/core/Container';
import Logo from 'Client/components/core/Logo';
import styles from './style';

const MainBanner = () =>
  <section className={styles['main-banner']}>
    <Container className={styles.container}>
      <Logo className={styles.logo} />
      <div className={styles.text}>
        <h1>Auroratide</h1>
        <div className={styles.subtitle}>
          <span>Coder</span><span>Writer</span><span>Dreamer</span>
        </div>
      </div>
    </Container>
  </section>;

export default MainBanner;