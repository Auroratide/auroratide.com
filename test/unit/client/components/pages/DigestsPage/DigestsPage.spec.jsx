import React from 'react';
import { shallow } from 'Test/enzyme';
import DigestBuilder from 'Test/utils/builders/DigestBuilder';

import DigestItem from 'Client/components/pages/DigestsPage/DigestItem';
import DigestsPage from 'Client/components/pages/DigestsPage/DigestsPage';

describe('<DigestsPage />', () => {
  let list;
  const page = () => shallow(<DigestsPage list={list} />);

  beforeEach(() => {
    list = [];
  });

  it('should render', () => {
    expect(page()).toHaveLength(1);
  });

  it('should render each digest from the store', () => {
    list = [
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