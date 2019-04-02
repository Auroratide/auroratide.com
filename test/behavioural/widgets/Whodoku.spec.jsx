import React from 'react';
import { withAppContext } from 'Test/enzyme';

import Whodoku from 'Client/components/widgets/Whodoku';

describe('Whodoku Behaviour', () => {
  let wrapper;
  const firstEditableSquare = () => wrapper.find('.whodoku .square:not(.cannot-edit)').at(0);
  const click = (square) => square.simulate('click');
  const hasImage = (square, n) => square.find('img').props().src.includes(`${n}.png`);

  beforeEach(() => {
    wrapper = withAppContext().mount(<Whodoku />);
  });

  it('should increment square state when clicked', () => {
    expect(firstEditableSquare().find('img')).toHaveLength(0);

    click(firstEditableSquare());
    expect(hasImage(firstEditableSquare(), 1)).toBe(true);

    click(firstEditableSquare());
    expect(hasImage(firstEditableSquare(), 2)).toBe(true);
  });

});