import React from 'react';
import { mount } from 'Test/enzyme';

import Accordion from 'Client/components/core/Accordion';

describe('Accordion Behaviour', () => {
  let accordionState;
  let wrapper;
  const accordion = () => mount(<div>
    <button onClick={accordionState.toggle}>Click me</button>
    <Accordion state={accordionState}></Accordion>
  </div>);

  const toggleAccordion = () => wrapper.find('button').simulate('click');
  const accordionHeight = () => wrapper.find('.accordion').instance().style.height;

  beforeEach(() => {
    accordionState = new Accordion.State();
  });

  it('should toggle the accordion block', () => {
    wrapper = accordion();
    expect(accordionHeight()).toBe('');

    toggleAccordion();
    expect(accordionHeight()).toBe('0px');

    toggleAccordion();
    expect(accordionHeight()).toBe('');
  });

});