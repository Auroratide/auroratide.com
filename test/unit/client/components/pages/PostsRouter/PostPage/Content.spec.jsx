import React from 'react';
import { shallow } from 'Test/enzyme';
import PostBuilder from 'Test/utils/builders/PostBuilder';

import Content from 'Client/components/pages/PostsRouter/PostPage/Content';

describe('<Content />', () => {
  it('should render', () => {
    expect(shallow(<Content post={new PostBuilder().build()} />)).toHaveLength(1);
  });
});