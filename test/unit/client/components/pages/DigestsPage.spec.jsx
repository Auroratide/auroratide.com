import React from 'react';
import { shallow } from 'Test/enzyme';
import DigestsStore from 'Client/store/digests-store';

import DigestsPage from 'Client/components/pages/DigestsPage/DigestsPage';

describe('<DigestsPage />', () => {
  let store;

  beforeEach(() => {
    store = new DigestsStore();
    store.refreshDigests = jest.fn();
  });

  it('should render', () => {
    expect(shallow(<DigestsPage digestsStore={store} />)).toHaveLength(1);
  });

  it('should refresh digests upon mount', () => {
    shallow(<DigestsPage digestsStore={store} />);
    expect(store.refreshDigests).toHaveBeenCalled();
  });
});