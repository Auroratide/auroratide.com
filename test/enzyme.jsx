import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { UrlBuilder } from 'Client/config/links';

configure({ adapter: new Adapter() });

export * from 'enzyme';

export const withAppContext = () => {
  return new MountContext();
};

export const withInitialRoute = route => {
  const context = new MountContext();
  return context.withInitialRoute(route);
};

class MountContext {
  constructor() {
    this.route = '/';
  }

  withInitialRoute(route) {
    this.route = route;
    return this;
  }

  mount(component) {
    return mount(
      <MemoryRouter initialEntries={[this.route]} initialIndex={0}>
        <Switch>
          <Route path={new UrlBuilder().posts()} render={() => component} />
          <Route path={new UrlBuilder().portfolio()} render={() => component} />
          <Route path='' render={() => component} />
        </Switch>
      </MemoryRouter>
    );
  }
}