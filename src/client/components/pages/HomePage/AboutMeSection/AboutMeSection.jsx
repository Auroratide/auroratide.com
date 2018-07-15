import React from 'react';
import Container from 'Client/components/core/Container';
import CoderSection from './CoderSection';
import WriterSection from './WriterSection';
import styles from './style';

const AboutMeSection = () =>
  <section className={styles['about-me-section']}>
    <Container>
      <CoderSection />
      <WriterSection />
    </Container>
  </section>;

export default AboutMeSection;