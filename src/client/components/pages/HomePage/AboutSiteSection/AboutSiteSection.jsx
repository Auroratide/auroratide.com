import React from 'react';
import Container from 'Client/components/core/Container';
import SiteSectionDescription from './SiteSectionDescription';
import styles from './style';

const AboutSiteSection = () =>
  <section className={styles['about-site-section']}>
    <Container>
      <h1>I write about technology and storytelling.</h1>
      <div className={styles['site-section-descriptions']}>
        <SiteSectionDescription
          icon='bars'
          title='Posts'
          description='This is some text about digests and how cool they are' />
        <SiteSectionDescription
          icon='bars'
          title='Digests'
          description="People all over the world are writing stuff. Digests are summaries of things I've read and found interesting or insightful." />
        <SiteSectionDescription
          icon='bars'
          title='Stories'
          description='This is some text about digests and how cool they are' />
      </div>
    </Container>
  </section>;

export default AboutSiteSection;