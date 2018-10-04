import React from 'react';
import { withInitialRoute } from 'Test/enzyme';
import Links from 'Client/config/links';
import Page from 'Client/components/layout/Page';
import Colors from 'Client/config/colors';

import App from 'Client/components/App';

describe('App Behaviour', () => {
  it('should select a theme based on pathname', () => {
    const wrapper = withInitialRoute(Links.Auroratide.DIGESTS).mount(<App />);

    expect(wrapper.find(Page).props().theme).toEqual(Colors.AURORA_GREEN.name);
  });
});