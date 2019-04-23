import React from 'react';
import { shallow } from 'Test/enzyme';

import ProjectPage from 'Client/components/pages/ProjectsRouter/ProjectPage';

describe('<ProjectPage />', () => {
  it('should render', () => {
    expect(shallow(<ProjectPage />)).toHaveLength(1);
  });
});