import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { RootStore } from 'Client/store';

configure({ adapter: new Adapter() });

export * from 'enzyme';

export const mountWithRouter = component => mount(<MemoryRouter>{component}</MemoryRouter>);

export const mountWithStore = component => mount(
  <Provider store={new RootStore()}>
    <MemoryRouter>
      {component}
    </MemoryRouter>
  </Provider>
);