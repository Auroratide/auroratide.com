import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import LinkedRelatedPost from './LinkedRelatedPost';

const RelatedPosts = ({ posts }) =>
  <React.Fragment>
    {posts && posts.map(post => <LinkedRelatedPost post={post} key={post.id} />)}
  </React.Fragment>;

RelatedPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.post)
};

export default RelatedPosts;