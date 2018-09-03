import React from 'react';
import Subsection from '../Subsection';
import DotsImage from '../DotsImage';

const TeacherSection = () =>
  <Subsection image={DotsImage} direction={Subsection.Direction.RIGHT_TO_LEFT}>
    <h2>Teaching</h2>
    <p>Though not a teacher by profession, teaching has always been a deep passion of mine. Teachers I had in my life did more than show me how to graph sophisticated functions and read elaborate poetry. They kindled an interest to learn more, to dig deeper.</p>
    <p>See, teaching is not about stuffing information into people&apos;s heads. Teaching is about cultivating curiosity.</p>
    <p>This website is one of my ways of sharing ideas and experiences in order to do just that. Though I want people leave my site knowing a little more about coding and storytelling, more importantly I hope people leave asking deeper questions or experimenting on their own.</p>
    <p>And hopefully that&apos;s reflected in my writing style!</p>
  </Subsection>;

export default TeacherSection;