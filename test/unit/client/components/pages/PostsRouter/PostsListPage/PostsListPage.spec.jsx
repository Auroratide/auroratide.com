import React from 'react';
import { shallow } from 'Test/enzyme';
import ResourceStore from 'Client/store/resource-store';

import PostsListPage from 'Client/components/pages/PostsRouter/PostsListPage/PostsListPage';

describe('<PostsListPage />', () => {
  it('should render', () => {
    expect(shallow(<PostsListPage store={new ResourceStore()} />)).toHaveLength(1);
  });
});