import React from 'react';
import { UrlBuilder } from 'Client/config/links';
import Colors from 'Client/config/colors';
import Container from 'Client/components/core/Container';
import SiteSectionDescription from './SiteSectionDescription';
import styles from './style';

const AboutSiteSection = () =>
  <section className={styles['about-site-section']}>
    <Container>
      <h1>I write about technology and storytelling.</h1>
      <div className={styles['site-section-descriptions']}>
        <SiteSectionDescription
          to={new UrlBuilder().posts()}
          color={Colors.AURORA_BLUE.name}
          icon='pencil'
          title='Posts'
          description="See what I have to say about software development, programming, storywriting, and much more." />
        <SiteSectionDescription
          to={new UrlBuilder().digests()}
          color={Colors.AURORA_GREEN.name}
          icon='newspaper'
          title='Digests'
          description="People all over the world are writing stuff. Digests are summaries of things I've read and found interesting or insightful." />
      </div>
    </Container>
  </section>;

export default AboutSiteSection;