'use strict';

import _ from 'lodash';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import reducers from './reducers';
import rootSaga from './sagas';
import INITIAL_STATE from './constants/store';
import Immutable from 'immutable';

const logger = createLogger({
  stateTransformer: (state) => {
    let newState = {};

    for (let i of Object.keys(state)) {
      newState[i] = {
        original: state[i],
        js: Immutable.Iterable.isIterable(state[i]) ? state[i].toJS() : state[i]
      };
    };

    return newState;
  },
  predicate: (getState, { type }) => {
    return !_.contains(actionTypesToIgnore, type);
  }
});

const actionTypesToIgnore = [
  'EFFECT_TRIGGERED',
  'EFFECT_RESOLVED',
  'EFFECT_REJECTED'
];
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
  logger // logger middleware must be last
];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
let store = createStoreWithMiddleware(combineReducers(reducers), INITIAL_STATE);
sagaMiddleware.run(rootSaga);

export default store;
