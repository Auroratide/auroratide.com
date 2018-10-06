import React from 'react';
import { shallow } from 'Test/enzyme';
import RouterMatchBuilder from 'Test/utils/builders/RouterMatchBuilder';
import PostBuilder from 'Test/utils/builders/PostBuilder';
import Loading from 'Client/components/core/Loading';
import PageNotFound from 'Client/components/pages/PageNotFound';
import TitleArea from 'Client/components/pages/PostsRouter/PostPage/TitleArea';

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

  describe('mounting', () => {
    it('should refresh the needed post on mount', () => {
      const refreshPostDetails = jest.spyOn(store, 'refreshPostDetails').mockResolvedValue();
      shallow(<PostPage match={match} postsStore={store} />);
  
      expect(refreshPostDetails).toHaveBeenCalledWith(id);
    });
  });

  describe('rendering', () => {
    it('should render the post', () => {
      store.posts[id] = new PostBuilder().build();
      const wrapper = shallow(<PostPage match={match} postsStore={store} />);
  
      expect(wrapper.find(TitleArea).exists()).toBe(true);
    });

    it('should render the post even when the post does not yet have content', () => {
      store.posts[id] = new PostBuilder().withContent(undefined).build();
      const wrapper = shallow(<PostPage match={match} postsStore={store} />);
  
      expect(wrapper.find(TitleArea).exists()).toBe(true);
    });

    it('should render basic information and a loading indicator when the post is only partially loaded', () => {
      store.posts[id] = new PostBuilder().withContent(undefined).build();
      store.isRefreshing = true;
      const wrapper = shallow(<PostPage match={match} postsStore={store} />);
  
      expect(wrapper.find(TitleArea).exists()).toBe(true);
      expect(wrapper.find(Loading).exists()).toBe(true);
    });
  
    it('should render the loading indicator when the post is currently being fetched', () => {
      store.isRefreshing = true;
      const wrapper = shallow(<PostPage match={match} postsStore={store} />);
  
      expect(wrapper.find(Loading).exists()).toBe(true);
    });
  
    it('should render the not found page when the post is nonexistent and the store is no longer refreshing', () => {
      const wrapper = shallow(<PostPage match={match} postsStore={store} />);
      expect(wrapper.find(PageNotFound).exists()).toBe(true);
    });
  });
  
});