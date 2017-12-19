import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from './reducers';


//remove createLogger() after dev
const middleware = applyMiddleware(promise(), createLogger(), thunk);

export default createStore(reducer, middleware);

