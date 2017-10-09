import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import App from './components/App.js';

render (
        <Router history={browserHistory}>
            <App/>
        </Router>,
    document.getElementById('root')
);