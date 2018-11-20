import React from 'react';
import { UrlBuilder } from 'Client/config/links';
import Disqus from 'Client/components/embed/Disqus';
import PropTypes from 'Client/utils/prop-types';

const Comments = ({ slug }) =>
  <section>
    <h2>Comments</h2>
    <Disqus url={new UrlBuilder().withBase().post(slug)} id={slug} />
  </section>;

Comments.propTypes = {
  slug: PropTypes.string.isRequired
};

export default Comments;