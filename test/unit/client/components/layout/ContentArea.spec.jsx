import React from 'react';
import { shallow } from 'Test/enzyme';

import ContentArea from 'Client/components/layout/ContentArea';

describe('<ContentArea />', () => {
  it('should render', () => {
    expect(shallow(<ContentArea />)).toHaveLength(1);
  });
});