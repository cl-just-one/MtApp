import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Main from './Main/Main.jsx';
import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <Main></Main>
  </Provider>,
  document.getElementById('root')
);