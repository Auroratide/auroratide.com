import React from 'react';
import { shallow } from 'Test/enzyme';

import PostsListPage from 'Client/components/pages/PostsRouter/PostsListPage';

describe('<PostsListPage />', () => {
  it('should render', () => {
    expect(shallow(<PostsListPage />)).toHaveLength(1);
  });
});