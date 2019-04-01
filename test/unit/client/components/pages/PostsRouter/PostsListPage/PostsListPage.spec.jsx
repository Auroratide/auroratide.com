import React from 'react';
import { shallow } from 'Test/enzyme';
import ResourceStore from 'Client/store/resource-store';

import PostsListPage from 'Client/components/pages/PostsRouter/PostsListPage/PostsListPage';

describe('<PostsListPage />', () => {

  let store;

  beforeEach(() => {
    store = new ResourceStore();
    jest.spyOn(store, 'refreshDetails').mockResolvedValue();
    jest.spyOn(store, 'refreshList').mockResolvedValue();
  });

  afterEach(() => jest.restoreAllMocks());
  
  it('should render', () => {
    expect(shallow(<PostsListPage postsStore={store} />)).toHaveLength(1);
  });

  it('should refresh posts list from the api upon mount', () => {
    const refreshPostsList = jest.spyOn(store, 'refreshList');

    shallow(<PostsListPage postsStore={store} />);
    expect(refreshPostsList).toHaveBeenCalled();
  });
});