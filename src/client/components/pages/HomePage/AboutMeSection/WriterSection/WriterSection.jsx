import React from 'react';
import Subsection from '../Subsection';
import DotsImage from '../DotsImage';

const WriterSection = () =>
  <Subsection image={DotsImage} direction={Subsection.Direction.RIGHT_TO_LEFT}>
    <h2>I Write</h2>
    <p>So I guess a lot of people write about stuff on the Internet. It&apos;s kind of the premier way for one&apos;s thoughts to become other people&apos;s thoughts.</p>
    <p>Sometimes it feels like all this content is segmented into different worlds of sorts. There&apos;s a World of Programming, World of Science, World of Gaming, and so forth. But most of the interesting stuff happens where these different worlds meet.</p>
    <p>Creativity flourishes when different worlds collide.</p>
    <p>Personally, I&apos;m a fan of both programming and storytelling. Programming is probably the one thing I&apos;m not terrible at, so it&apos;s kind of a part of my everyday life. Meanwhile, a simple story can be such a powerful instrument in teaching a skill or driving emotion.</p>
    <p>If I&apos;m going to be honest, we programmers can learn a lot about our craft from the world of storytelling! And I guess that&apos;s why I like to write about these things.</p>
  </Subsection>;

export default WriterSection;