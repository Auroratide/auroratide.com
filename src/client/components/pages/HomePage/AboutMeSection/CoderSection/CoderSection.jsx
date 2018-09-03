import React from 'react';
import Subsection from '../Subsection';
import OmnixisImage from '../OmnixisImage';
import Link from 'Client/components/core/Link';
import Muted from 'Client/components/core/Muted';
import Links from 'Client/config/links';

const CoderSection = () =>
  <Subsection image={OmnixisImage} direction={Subsection.Direction.LEFT_TO_RIGHT}>
    <h2>Coding</h2>
    <p>A long time ago, I had a graphing calculator which came with a bunch of games on it. But one day, a nefarious colleague deleted all those games. Desperate, I sought a manual hoping they could be restored, but I stumbled upon something much better.</p>
    <p>The games could not be undeleted. Instead, they could be recreated.</p>
    <p>That&apos;s how I discovered programming. Since then, I&apos;ve dabbled in game development, artificial intelligence, websites, and much more. It turns out coding is much like magic.</p>
    <p>Nowadays, I work for a brilliant software company called <Link to={Links.External.THOUGHTWORKS} newTab>ThoughtWorks</Link>. I deal mostly with Javascript code (fun stuff like React or Pixi). So if you&apos;re a frontend developer or perhaps a game designer, hopefully you will find the content on my site enriching!</p>
    <Muted.small>Oh, the tetrisy thing on the right? That&apos;s Omnixis, a game I made. <Link to={Links.External.OMNIXIS} newTab>Try it out</Link>!</Muted.small>
  </Subsection>;

export default CoderSection;