import React from 'react';
import { shallow } from 'Test/enzyme';
import ResourceStore from 'Client/store/resource-store';

import PostsListPage from 'Client/components/pages/PostsRouter/PostsListPage/PostsListPage';

describe('<PostsListPage />', () => {

  afterEach(() => jest.restoreAllMocks());
  
  it('should render', () => {
    expect(shallow(<PostsListPage postsStore={new ResourceStore()} />)).toHaveLength(1);
  });

  it('should refresh posts list from the api upon mount', () => {
    const store = new ResourceStore();
    const refreshPostsList = jest.spyOn(store, 'refreshList');

    shallow(<PostsListPage postsStore={store} />);
    expect(refreshPostsList).toHaveBeenCalled();
  });
});