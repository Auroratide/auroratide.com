import React from 'react';
import { shallow } from 'Test/enzyme';

import RelatedPosts from 'Client/components/pages/PostsRouter/PostPage/RelatedPosts';

describe('<RelatedPosts />', () => {
  it('should render', () => {
    expect(shallow(<RelatedPosts />)).toHaveLength(1);
  });
});