import React from 'react';
import { shallow } from 'Test/enzyme';
import RouterMatchBuilder from 'Test/utils/builders/RouterMatchBuilder';
import PostBuilder from 'Test/utils/builders/PostBuilder';
import Loading from 'Client/components/core/Loading';
import PageNotFound from 'Client/components/pages/PageNotFound';
import TitleArea from 'Client/components/pages/PostsRouter/PostPage/TitleArea';

import ResourceStore from 'Client/store/resource-store';
import PostPage from 'Client/components/pages/PostsRouter/PostPage/PostPage';

describe('<PostPage />', () => {
  const id = 'the-id';
  let store;
  let match;

  let refreshDetails;
  let refreshList;

  beforeEach(() => {
    store = new ResourceStore();
    match = new RouterMatchBuilder().withParams({ id }).build();

    refreshDetails = jest.spyOn(store, 'refreshDetails').mockResolvedValue();
    refreshList = jest.spyOn(store, 'refreshList').mockResolvedValue();
  });

  afterEach(() => jest.restoreAllMocks());

  describe('mounting', () => {
    it('should refresh the needed post on mount', () => {
      shallow(<PostPage match={match} postsStore={store} />);
  
      expect(refreshDetails).toHaveBeenCalledWith(id);
    });

    it('should refresh the posts list on mount', () => {
      shallow(<PostPage match={match} postsStore={store} />);
      
      expect(refreshList).toHaveBeenCalled();
    });
  });
  
  describe('updating', () => {
    let wrapper;

    const update = () => wrapper.setProps();

    beforeEach(() => {
      store.elements[id] = new PostBuilder().withContent(undefined).build();
      wrapper = shallow(<PostPage match={match} postsStore={store} />);
      refreshDetails.mockClear();
    });
    
    it('should refresh post details when the post does not have content', () => {
      update();
  
      expect(refreshDetails).toHaveBeenCalledWith(id);
    });

    it('should not refresh post details when API is already refreshing', () => {
      store.isRefreshing = true;
      update();

      expect(refreshDetails).not.toHaveBeenCalled();
    });

    it('should not refresh post details when content already exists', () => {
      store.elements[id] = new PostBuilder().withContent('Hey').build();
      update();

      expect(refreshDetails).not.toHaveBeenCalled();
    });

    it('should not refresh post details when post is undefined', () => {
      store.elements[id] = undefined;
      update();

      expect(refreshDetails).not.toHaveBeenCalled();
    });
  });

  describe('rendering', () => {
    it('should render the post', () => {
      store.elements[id] = new PostBuilder().build();
      const wrapper = shallow(<PostPage match={match} postsStore={store} />);
  
      expect(wrapper.find(TitleArea).exists()).toBe(true);
    });

    it('should render the post even when the post does not yet have content', () => {
      store.elements[id] = new PostBuilder().withContent(undefined).build();
      const wrapper = shallow(<PostPage match={match} postsStore={store} />);
  
      expect(wrapper.find(TitleArea).exists()).toBe(true);
    });

    it('should render basic information and a loading indicator when the post is only partially loaded', () => {
      store.elements[id] = new PostBuilder().withContent(undefined).build();
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