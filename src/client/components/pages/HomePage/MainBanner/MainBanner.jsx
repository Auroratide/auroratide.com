import React from 'react';
import Container from 'Client/components/core/Container';
import Button from 'Client/components/core/Button';
import Link from 'Client/components/core/Link';
import Logo from 'Client/components/core/Logo';
import styles from './style';

const MainBanner = () =>
  <section className={styles['main-banner']}>
    <Container className={styles.container}>
      <Logo className={styles.logo} />
      <div className={styles.text}>
        <h1>Auroratide</h1>
        <div className={styles.subtitle}>
          <span>Coder</span><span>Teacher</span><span>Dreamer</span>
        </div>
        <div className={styles['link-container']}>
          <Button tag={Link} to='/digests' className={styles.link} outline>
            What am I up to?
          </Button>
        </div>
      </div>
    </Container>
  </section>;

export default MainBanner;