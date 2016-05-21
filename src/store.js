'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import reducers from './reducers';
import INITIAL_STATE from './constants/store';
import Immutable from 'immutable';

const logger = createLogger({
  stateTransformer: (state) => {
    let newState = {};

    for (let i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    };

    return newState;
  }
});
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

let store = createStoreWithMiddleware(combineReducers(reducers), INITIAL_STATE);
export default store;
