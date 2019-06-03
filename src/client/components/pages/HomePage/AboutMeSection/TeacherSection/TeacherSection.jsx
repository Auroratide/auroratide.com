import React from 'react';
import Muted from 'Client/components/core/Muted';
import Link from 'Client/components/core/Link';
import Subsection from '../Subsection';
import DotsImage from '../DotsImage';
import { UrlBuilder } from 'Client/config/links';

const TeacherSection = () =>
  <Subsection image={DotsImage} direction={Subsection.Direction.RIGHT_TO_LEFT}>
    <h2>Teaching</h2>
    <p>Though not a teacher by profession, teaching has always been a deep passion of mine. Teachers I had in my life did more than show me how to graph sophisticated functions and read elaborate poetry. They kindled an interest to learn more, to dig deeper.</p>
    <p>See, teaching is not about stuffing information into people&apos;s heads. Teaching is about cultivating curiosity.</p>
    <p>This website is one of my ways of sharing ideas and experiences in order to do just that. Though I want people leave my site knowing a little more about coding and storytelling, more importantly I hope people leave asking deeper questions or experimenting on their own.</p>
    <p>And hopefully that&apos;s reflected in my writing style!</p>
    <Muted.small>That funky picture on the left demonstrates an important concept in creativity. <Link to={new UrlBuilder().post('connecting-dots-and-unassuming-assumptions')}>Read what I wrote</Link>!</Muted.small>
  </Subsection>;

export default TeacherSection;