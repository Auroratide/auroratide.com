import React from 'react';
import Container from 'Client/components/core/Container';
import Link from 'Client/components/core/Link';
import Icon from 'Client/components/core/Icon';
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
        <div className={styles['link-container']}>
          <Link to='/digests' className={styles.link}>
            <Icon icon='chevron-right' className={styles.icon} />
            <span>What am I up to?</span>
          </Link>
        </div>
      </div>
    </Container>
  </section>;

export default MainBanner;