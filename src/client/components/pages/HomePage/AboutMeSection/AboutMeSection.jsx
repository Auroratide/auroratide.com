import React from 'react';
import Container from 'Client/components/core/Container';
import CoderSection from './CoderSection';
import styles from './style';

const AboutMeSection = () =>
  <section className={styles['about-me-section']}>
    <Container>
      <CoderSection />
    </Container>
  </section>;

export default AboutMeSection;