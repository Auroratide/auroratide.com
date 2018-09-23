import React from 'react';
import { shallow } from 'Test/enzyme';
import PostBuilder from 'Test/utils/builders/PostBuilder';

import PostItem from 'Client/components/pages/PostsRouter/PostsListPage/PostItem';

describe('<PostItem />', () => {
  it('should render', () => {
    const post = new PostBuilder().build();
    expect(shallow(<PostItem post={post} />)).toHaveLength(1);
  });
});