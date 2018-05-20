import React from 'react';
import { shallow } from 'Test/enzyme';
import * as DateUtils from 'Client/utils/date';

import License from 'Client/components/layout/Footer/License';

describe('<License />', () => {
  const license = () => shallow(<License />);

  it('should render', () => {
    expect(license()).toHaveLength(1);
  });

  it('should have name in the license', () => {
    expect(license().text()).toContain('Timothy Foster');
  });

  it('should render the current year', () => {
    DateUtils.currentYear = jest.fn().mockReturnValue(2004);
    expect(license().text()).toContain('2004');
  });
});