import React from 'react';
import Container from 'Client/components/core/Container';
import CoderSection from './CoderSection';
import TeacherSection from './TeacherSection';
import DreamerSection from './DreamerSection';
import styles from './style';

const AboutMeSection = () =>
  <section className={styles['about-me-section']}>
    <Container>
      <CoderSection />
      <TeacherSection />
      <DreamerSection />
    </Container>
  </section>;

export default AboutMeSection;