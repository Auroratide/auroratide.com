import React from 'react';
import OmnixisImage from '../OmnixisImage';
import Link from 'Client/components/core/Link';
import Links from 'Client/config/links';
import styles from './style';

const CoderSection = () =>
  <div className={styles['coder-section']}>
    <div className={styles.text}>
      <h2>I Code</h2>
      <p>A long time ago, when I was still a student in school,  I had a graphing calculator which came with a bunch of games on it. But one day, a nefarious student randomly deleted all those games. Desperate, I sought out a manual hoping they could be undeleted, but I stumbled upon something much better.</p>
      <p>The games could not be undeleted. Instead, they could be recreated.</p>
      <p>That&apos;s how I discovered programming. Since then, I&apos;ve dabbled in game development, artificial intelligence, webapp creation, and much more. It turns out coding is a lot like magic.</p>
      <p>Nowadays, I work for a brilliant software company called <Link to={Links.External.THOUGHTWORKS} newTab>ThoughtWorks</Link>, a world leader in technological advocacy.</p>
      <p>Oh, the tetrisy thing on the right? That&apos;s Omnixis, a game I made. Try it out!</p>
    </div>
    <div className={styles['image-container']}>
      <OmnixisImage className={styles.image} />
    </div>
  </div>;

export default CoderSection;