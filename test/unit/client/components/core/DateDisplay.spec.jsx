import React from 'react';
import { shallow } from 'Test/enzyme';

import DateDisplay from 'Client/components/core/DateDisplay';

describe('<DateDisplay />', () => {
  it('should show the date in the correct format', () => {
    const date = new Date('2018-09-22T12:00:00.000Z');
    const wrapper = shallow(<DateDisplay date={date} />);

    expect(wrapper.text()).toContain('Saturday, 22 Sep 2018');
  });

  it('should not render if date is invalid', () => {
    const date = new Date('');
    const wrapper = shallow(<DateDisplay date={date} />);

    expect(wrapper.text()).toEqual('');
  });
});