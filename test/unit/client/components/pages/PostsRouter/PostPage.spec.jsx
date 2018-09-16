import React from 'react';
import { shallow } from 'Test/enzyme';

import PostPage from 'Client/components/pages/PostsRouter/PostPage';

describe('<PostPage />', () => {
  it('should render', () => {
    expect(shallow(<PostPage />)).toHaveLength(1);
  });
});