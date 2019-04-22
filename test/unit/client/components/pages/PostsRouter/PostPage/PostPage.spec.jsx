import React from 'react';
import { shallow } from 'Test/enzyme';
import PostBuilder from 'Test/utils/builders/PostBuilder';
import Loading from 'Client/components/core/Loading';
import TitleArea from 'Client/components/pages/PostsRouter/PostPage/TitleArea';

import ResourceStore from 'Client/store/resource-store';
import PostPage from 'Client/components/pages/PostsRouter/PostPage/PostPage';

describe('<PostPage />', () => {
  let store;

  beforeEach(() => {
    store = new ResourceStore();
  });
  
  afterEach(() => jest.restoreAllMocks());
  
  describe('mounting', () => {
    let refreshList;
    
    beforeEach(() => {
      refreshList = jest.spyOn(store, 'refreshList').mockResolvedValue();
    });

    it('should refresh the posts list on mount', () => {
      shallow(<PostPage item={new PostBuilder().build()} store={store} />);
      
      expect(refreshList).toHaveBeenCalled();
    });
  });

  describe('rendering', () => {
    it('should render the post', () => {
      const item = new PostBuilder().build();
      const wrapper = shallow(<PostPage item={item} store={store} />);
  
      expect(wrapper.find(TitleArea).exists()).toBe(true);
    });

    it('should render the post even when the post does not yet have content', () => {
      const item = new PostBuilder().withContent(undefined).build();
      const wrapper = shallow(<PostPage item={item} store={store} />);
  
      expect(wrapper.find(TitleArea).exists()).toBe(true);
    });

    it('should render basic information and a loading indicator when the post is only partially loaded', () => {
      const item = new PostBuilder().withContent(undefined).build();
      store.isRefreshing = true;
      const wrapper = shallow(<PostPage item={item} store={store} />);
  
      expect(wrapper.find(TitleArea).exists()).toBe(true);
      expect(wrapper.find(Loading).exists()).toBe(true);
    });
  });
  
});