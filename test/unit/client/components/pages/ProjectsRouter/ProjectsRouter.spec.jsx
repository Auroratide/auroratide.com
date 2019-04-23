import React from 'react';
import { shallow } from 'Test/enzyme';

import ProjectsRouter from 'Client/components/pages/ProjectsRouter';

describe('<ProjectsRouter />', () => {
  it('should render', () => {
    expect(shallow(<ProjectsRouter />)).toHaveLength(1);
  });
});