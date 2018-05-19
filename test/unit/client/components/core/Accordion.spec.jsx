import React from 'react';
import { shallow } from 'Test/enzyme';

import Accordion from 'Client/components/core/Accordion/Accordion';
import AccordionState from 'Client/components/core/Accordion/state';

describe('<Accordion />', () => {
  let props;
  const accordion = () => shallow(<Accordion {...props} />);

  beforeEach(() => {
    props = {
      state: new AccordionState(),
      className: undefined
    };
  });

  it('should render', () => {
    expect(accordion()).toHaveLength(1);
  });

  describe('state', () => {
    let state;

    beforeEach(() => {
      state = new AccordionState();
    });

    it('should set expanded to true', () => {
      state.expand();
      expect(state.expanded).toBe(true);
    });

    it('should set expanded to false', () => {
      state.collapse();
      expect(state.expanded).toBe(false);
    });

    it('should toggle expanded between true and false', () => {
      state.toggle();
      expect(state.expanded).toBe(true);

      state.toggle();
      expect(state.expanded).toBe(false);
    });
  });
});