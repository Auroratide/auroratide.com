import React from 'react';
import { shallow } from 'Test/enzyme';

import MaslowsHierarchyOfNeeds from 'Client/components/widgets/MaslowsHierarchyOfNeeds';

describe('<MaslowsHierarchyOfNeeds />', () => {
  it('should render', () => {
    expect(shallow(<MaslowsHierarchyOfNeeds />)).toHaveLength(1);
  });
});