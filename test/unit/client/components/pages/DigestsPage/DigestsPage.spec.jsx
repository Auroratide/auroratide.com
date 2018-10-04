import React from 'react';
import { shallow } from 'Test/enzyme';
import DigestsStore from 'Client/store/digests-store';
import DigestBuilder from 'Test/utils/builders/DigestBuilder';
import Loading from 'Client/components/core/Loading';

import DigestItem from 'Client/components/pages/DigestsPage/DigestItem';
import DigestsPage from 'Client/components/pages/DigestsPage/DigestsPage';

describe('<DigestsPage />', () => {
  let store;
  const page = () => shallow(<DigestsPage digestsStore={store} />);

  beforeEach(() => {
    store = new DigestsStore();
    store.refreshDigests = jest.fn();
  });

  it('should render', () => {
    expect(page()).toHaveLength(1);
  });

  it('should refresh digests upon mount', () => {
    page();
    expect(store.refreshDigests).toHaveBeenCalled();
  });

  it('should render each digest from the store', () => {
    store.digests = [
      new DigestBuilder().withId('1').build(),
      new DigestBuilder().withId('2').build(),
      new DigestBuilder().withId('3').build()
    ];

    const wrapper = page();
    expect(wrapper.find(DigestItem)).toHaveLength(3);
    expect(wrapper.find(DigestItem).at(0).key()).toEqual('1');
    expect(wrapper.find(DigestItem).at(1).key()).toEqual('2');
    expect(wrapper.find(DigestItem).at(2).key()).toEqual('3');
  });

  describe('loading indicator', () => {
    it('should render the loading indicator when the digests list is empty and it is currently refreshing', () => {
      store.isRefreshing = true;

      expect(page().find(Loading).exists()).toBe(true);
    });

    it('should not render the loading indicator when the digests list is not empty, even if the page is refreshing', () => {
      store.digests = [new DigestBuilder().build()];
      store.isRefreshing = true;

      expect(page().find(Loading).exists()).toBe(false);
    });
  });
});