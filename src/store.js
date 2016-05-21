'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import reducers from './reducers';
import INITIAL_STATE from './constants/store';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

let store = createStoreWithMiddleware(combineReducers(reducers), INITIAL_STATE);
export default store;
