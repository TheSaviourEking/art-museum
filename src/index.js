import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Root />
  </React.StrictMode>
);
