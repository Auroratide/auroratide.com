import React from 'react';
import { shallow } from 'Test/enzyme';
import DigestsStore from 'Client/store/digests-store';
import DigestItem from 'Client/components/core/DigestItem';
import DigestBuilder from 'Test/utils/builders/DigestBuilder';

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
});