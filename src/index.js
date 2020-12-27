import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Top from './views/pages/Top';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Top />
  </Provider>,
  document.getElementById('root')
);
