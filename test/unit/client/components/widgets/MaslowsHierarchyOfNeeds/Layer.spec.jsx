import React from 'react';
import { shallow } from 'Test/enzyme';

import Layer from 'Client/components/widgets/MaslowsHierarchyOfNeeds/Layer';

describe('<Layer />', () => {
  it('should render', () => {
    expect(shallow(<Layer />)).toHaveLength(1);
  });
});