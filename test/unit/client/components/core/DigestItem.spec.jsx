import React from 'react';
import { shallow } from 'Test/enzyme';
import DigestBuilder from 'Test/utils/builders/DigestBuilder';

import DigestItem from 'Client/components/core/DigestItem';

describe('<DigestItem />', () => {
  it('should render', () => {
    const digest = new DigestBuilder().build();
    expect(shallow(<DigestItem digest={digest} />)).toHaveLength(1);
  });
});