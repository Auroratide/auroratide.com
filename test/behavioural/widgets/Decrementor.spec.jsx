import React from 'react';
import { withAppContext } from 'Test/enzyme';

import Decrementor from 'Client/components/widgets/Decrementor';

describe('Decrementor Behaviour', () => {
  let wrapper;
  const clickDecrement = () => wrapper.find('[children="Decrement"]').at(0).simulate('click');
  const getNumber = () => wrapper.find('.number').text();

  it('should decrement the number by 2 when the button is pressed', () => {
    wrapper = withAppContext().mount(<Decrementor initialValue={10} />);
    expect(getNumber()).toEqual('10');

    clickDecrement();
    expect(getNumber()).toEqual('8');
  });

});