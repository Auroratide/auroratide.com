import React from 'react';
import { shallow } from 'Test/enzyme';
import PostBuilder from 'Test/utils/builders/PostBuilder';

import LinkedRelatedPost from 'Client/components/pages/PostsRouter/PostPage/Content/LinkedRelatedPost';

describe('<LinkedRelatedPost />', () => {
  it('should render', () => {
    expect(shallow(<LinkedRelatedPost post={new PostBuilder().build()} />)).toHaveLength(1);
  });
});