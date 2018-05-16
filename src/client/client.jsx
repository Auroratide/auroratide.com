import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'Client/components/App';
import './styles/normalize';

window.onload = () => render( (
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));