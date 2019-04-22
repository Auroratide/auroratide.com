import React from 'react';
import { shallow } from 'Test/enzyme';
import Loading from 'Client/components/core/Loading';
import ResourceStore from 'Client/store/resource-store';
import withResourceList from 'Client/components/core/with-resource-list/with-resource-list';

describe('with-resource-list', () => {
  let store;
  const WithResourceList = withResourceList(() =>
    <aside>Hi</aside>
  );

  beforeEach(() => {
    store = new ResourceStore(null, null);
    store.refreshList = jest.fn();
  });

  it('should show loading when the store is empty and refeshing', () => {
    store.isRefreshing = true;

    const wrapper = shallow(<WithResourceList store={store} />);
    expect(wrapper.find(Loading)).toHaveLength(1);
  });
  
  it('should show the component when the store is not refreshing', () => {
    store.isRefreshing = false;
    
    const wrapper = shallow(<WithResourceList store={store} />);
    expect(wrapper.find(Loading)).toHaveLength(0);
    expect(wrapper.dive().text()).toContain('Hi');
  });
});