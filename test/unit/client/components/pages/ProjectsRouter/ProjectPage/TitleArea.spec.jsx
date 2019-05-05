import React from 'react';
import { shallow } from 'Test/enzyme';

import TitleArea from 'Client/components/pages/ProjectsRouter/ProjectPage/TitleArea';

describe('<TitleArea />', () => {
  it('should render', () => {
    expect(shallow(<TitleArea />)).toHaveLength(1);
  });
});