import 'regenerator-runtime/runtime';
import 'intersection-observer';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './store';

import './styles/normalize';
import './styles/global';

import App from 'Client/components/App';

window.onload = () => render( (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));