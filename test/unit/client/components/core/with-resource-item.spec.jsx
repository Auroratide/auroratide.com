import React from 'react';
import { shallow } from 'Test/enzyme';
import Loading from 'Client/components/core/Loading';
import PageNotFound from 'Client/components/pages/PageNotFound';
import ResourceStore from 'Client/store/resource-store';
import withResourceItem from 'Client/components/core/with-resource-item/with-resource-item';

describe('with-resource-item', () => {
  const id = 'id';
  const item = { id };
  let store;
  const WithResourceItem = withResourceItem(() =>
    <aside>Hi</aside>
  );

  beforeEach(() => {
    store = new ResourceStore(null, null);
  });

  describe('rendering', () => {
    it('should show the item when the item exists', () => {
      store.elements[id] = item;

      const wrapper = shallow(<WithResourceItem store={store} id={id} />);
      expect(wrapper.find(Loading)).toHaveLength(0);
      expect(wrapper.dive().text()).toContain('Hi');
    });

    it('should show loading when the item is unloaded and the store is refreshing', () => {
      store.isRefreshing = true;

      const wrapper = shallow(<WithResourceItem store={store} id={id} />);
      expect(wrapper.find(Loading)).toHaveLength(1);
    });
    
    it('should show not found when the item is unloaded, but the store is not refreshing', () => {
      store.isRefreshing = false;
      
      const wrapper = shallow(<WithResourceItem store={store} id={id} />);
      expect(wrapper.find(PageNotFound)).toHaveLength(1);
    });
  });

  describe('updating', () => {
    let wrapper;
    let refreshDetails;

    const update = () => wrapper.setProps();

    beforeEach(() => {
      wrapper = shallow(<WithResourceItem id={id} store={store} />);
      refreshDetails = jest.spyOn(store, 'refreshDetails');
    });

    afterEach(() => jest.restoreAllMocks());
    
    it('should refresh post details when the post does not have content', () => {
      store.isRefreshing = false;
      store.elements[id] = { id };

      update();
  
      expect(refreshDetails).toHaveBeenCalledWith(id);
    });

    it('should not refresh post details when API is already refreshing', () => {
      store.elements[id] = { id };
      store.isRefreshing = true;

      update();

      expect(refreshDetails).not.toHaveBeenCalled();
    });

    it('should not refresh post details when content already exists', () => {
      store.elements[id] = { id, content: 'hey' };

      update();

      expect(refreshDetails).not.toHaveBeenCalled();
    });

    it('should not refresh post details when post is undefined', () => {
      store.elements[id] = undefined;

      update();

      expect(refreshDetails).not.toHaveBeenCalled();
    });
  });
});