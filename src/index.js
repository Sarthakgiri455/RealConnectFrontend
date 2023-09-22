import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store'
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store ={store}>
    <App/>
  </Provider>
);
