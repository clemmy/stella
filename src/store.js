'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';
import INITIAL_STATE from './constants/store';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

let store = createStoreWithMiddleware(combineReducers(reducers), INITIAL_STATE);
export default store;
