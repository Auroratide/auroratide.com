import React from 'react';
import { shallow } from 'Test/enzyme';
import PostBuilder from 'Test/utils/builders/PostBuilder';

import ShareButtons from 'Client/components/pages/PostsRouter/PostPage/ShareButtons';

describe('<ShareButtons />', () => {
  it('should render', () => {
    expect(shallow(<ShareButtons post={new PostBuilder().build()} />)).toHaveLength(1);
  });
});