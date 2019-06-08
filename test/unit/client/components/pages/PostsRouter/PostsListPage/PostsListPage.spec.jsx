import React from 'react';
import { shallow } from 'Test/enzyme';

import PostsListPage from 'Client/components/pages/PostsRouter/PostsListPage/PostsListPage';

describe('<PostsListPage />', () => {
  it('should render', () => {
    const resource = {
      list: () => []
    };
    expect(shallow(<PostsListPage resource={resource} />)).toHaveLength(1);
  });
});