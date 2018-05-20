import React from 'react';
import { mountWithRouter } from 'Test/enzyme';

import TopBar from 'Client/components/layout/TopBar';

describe('TopBar Behaviour', () => {
  let wrapper;
  const topBar = () => mountWithRouter(<TopBar />);

  const clickHamburger = () => wrapper.find('.main-links > .hamburger').simulate('click');
  const clickNavLink = () => wrapper.find('.nav-links .nav-link').at(0).simulate('click');
  const clickLogoLink = () => wrapper.find('.logo-link').at(0).simulate('click');

  const areNavLinksVisible = () => wrapper.find('div.nav-links').instance().style.height !== '';

  it('should toggle the nav links when the hamburger is clicked', () => {
    wrapper = topBar();

    clickHamburger();
    expect(areNavLinksVisible()).toBe(true);

    clickHamburger();
    expect(areNavLinksVisible()).toBe(false);
  });

  it('should collapse the nav links when a nav link is clicked', () => {
    wrapper = topBar();

    clickHamburger();
    expect(areNavLinksVisible()).toBe(true);

    clickNavLink();
    expect(areNavLinksVisible()).toBe(false);
  });

  it('should collapse the nav links when the logo is clicked', () => {
    wrapper = topBar();

    clickHamburger();
    expect(areNavLinksVisible()).toBe(true);

    clickLogoLink();
    expect(areNavLinksVisible()).toBe(false);
  });

});