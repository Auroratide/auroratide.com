import React from 'react';
import Container from 'Client/components/core/Container';
import styles from './style';

const AboutSiteSection = () =>
  <section className={styles['about-site-section']}>
    <Container>
      <h1>I write about technology and storytelling.</h1>
    </Container>
  </section>;

export default AboutSiteSection;