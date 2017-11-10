import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import Store from './utils/Store.js';
import App from './components/App.js';

render (
  <Provider store={Store}>
  	<Router history={browserHistory}>
      <App/>
  </Router>
  </Provider>,
  document.getElementById('root')
);