import React from 'react';
import { shallow } from 'Test/enzyme';

import FileUploader from 'Client/components/core/FileUploader';

describe('<FileUploader />', () => {
  it('should render', () => {
    expect(shallow(<FileUploader />)).toHaveLength(1);
  });
});