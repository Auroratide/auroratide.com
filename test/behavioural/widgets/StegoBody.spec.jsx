import React from 'react';
import { mount } from 'Test/enzyme';

import StegoBody from 'Client/components/widgets/StegoBody';

describe('StegoBody Behaviour', () => {
  const TEXT = 'Aurora';
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<StegoBody text={TEXT}>
      <p>First paragraph</p>
      <p>Second paragraph</p>
    </StegoBody>);
  });

  it('should embed text into the virtual dom', () => {
    const children = wrapper.children();

    const result = children.reduce((str, child) => {
      const charquad = child.instance()._reactInternalId;
      const first = charquad >> 24;
      const second = (charquad >> 16) & 0x000000FF;
      const third = (charquad >> 8) & 0x000000FF;
      const fourth = charquad & 0x000000FF;

      return str + String.fromCharCode(first) +
                   String.fromCharCode(second) +
                   String.fromCharCode(third) +
                   String.fromCharCode(fourth);
    }, '').replace(/\0/g, '');

    expect(result).toEqual(TEXT);
  });
});