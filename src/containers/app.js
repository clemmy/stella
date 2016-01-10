'use strict';

import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import Stella from './stella';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Stella />}
      </Provider>
    );
  }
}
