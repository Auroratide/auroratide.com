import React from 'react';
import { mount } from 'Test/enzyme';

import Accordion, { withAccordion } from 'Client/components/core/Accordion';

describe('Accordion Behaviour', () => {
  let wrapper;
  const toggleAccordion = () => wrapper.find('#toggle').simulate('click');
  const collapseAccordion = () => wrapper.find('#collapse').simulate('click');
  const expandAccordion = () => wrapper.find('#expand').simulate('click');
  const accordionHeight = () => wrapper.find('.accordion').instance().style.height;

  beforeEach(() => {
    wrapper = mount(React.createElement(withAccordion(({ accordion }) => <>
      <button id='toggle' onClick={accordion.toggle}>Click me</button>
      <button id='collapse' onClick={accordion.collapse}>Click me</button>
      <button id='expand' onClick={accordion.expand}>Click me</button>
      <Accordion expanded={accordion.expanded}></Accordion>
    </>)));
  });

  it('should toggle the accordion block', () => {
    expect(accordionHeight()).toBe('');

    toggleAccordion();
    expect(accordionHeight()).toBe('0px');

    toggleAccordion();
    expect(accordionHeight()).toBe('');
  });

  it('should expand and collapse the accordion block', () => {
    expect(accordionHeight()).toBe('');

    expandAccordion();
    expect(accordionHeight()).toBe('0px');

    collapseAccordion();
    expect(accordionHeight()).toBe('');
  });

});