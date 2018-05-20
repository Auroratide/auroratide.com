import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

export * from 'enzyme';

export const mountWithRouter = component => mount(<MemoryRouter>{component}</MemoryRouter>);