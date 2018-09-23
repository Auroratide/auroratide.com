import React from 'react';
import { shallow } from 'Test/enzyme';
import PostsStore from 'Client/store/posts-store';

import PostsListPage from 'Client/components/pages/PostsRouter/PostsListPage/PostsListPage';

describe('<PostsListPage />', () => {

  afterEach(() => jest.restoreAllMocks());
  
  it('should render', () => {
    expect(shallow(<PostsListPage postsStore={new PostsStore()} />)).toHaveLength(1);
  });

  it('should refresh posts list from the api upon mount', () => {
    const store = new PostsStore();
    const refreshPostsList = jest.spyOn(store, 'refreshPostsList');

    shallow(<PostsListPage postsStore={store} />);
    expect(refreshPostsList).toHaveBeenCalled();
  });
});