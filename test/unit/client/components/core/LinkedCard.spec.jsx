import React from 'react';
import { shallow } from 'Test/enzyme';
import Colors from 'Client/config/colors';

import LinkedCard from 'Client/components/core/LinkedCard';

describe('<LinkedCard />', () => {
  it('should render', () => {
    expect(shallow(<LinkedCard to={''} icon={''} color={Colors.AELLA_GREEN.name} />)).toHaveLength(1);
  });
});