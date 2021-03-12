import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import reportWebVitals from './reportWebVitals';

// global
import 'antd/dist/antd.css';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
