import React from 'react';
import Container from 'Client/components/core/Container';
import CoderSection from './CoderSection';
import WriterSection from './WriterSection';
import DreamerSection from './DreamerSection';
import styles from './style';

const AboutMeSection = () =>
  <section className={styles['about-me-section']}>
    <Container>
      <CoderSection />
      <WriterSection />
      <DreamerSection />
    </Container>
  </section>;

export default AboutMeSection;