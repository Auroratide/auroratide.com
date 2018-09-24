import React from 'react';
import { shallow } from 'Test/enzyme';
import RouterMatchBuilder from 'Test/utils/builders/RouterMatchBuilder';
import PostBuilder from 'Test/utils/builders/PostBuilder';

import PostsStore from 'Client/store/posts-store';
import PostPage from 'Client/components/pages/PostsRouter/PostPage/PostPage';

describe('<PostPage />', () => {
  const id = 'the-id';
  let store;
  let match;

  beforeEach(() => {
    store = new PostsStore();
    match = new RouterMatchBuilder().withParams({ id }).build();
  });

  afterEach(() => jest.restoreAllMocks());

  it('should render', () => {
    expect(shallow(<PostPage match={match} postsStore={store} />)).toHaveLength(1);
  });

  it('should render when the post does not yet have content', () => {
    store.posts[id] = new PostBuilder().withContent(undefined).build();
    expect(shallow(<PostPage match={match} postsStore={store} />)).toHaveLength(1);
  });

  it('should refresh the needed post on mount', () => {
    const refreshPostDetails = jest.spyOn(store, 'refreshPostDetails').mockResolvedValue();
    shallow(<PostPage match={match} postsStore={store} />);

    expect(refreshPostDetails).toHaveBeenCalledWith(id);
  });
});