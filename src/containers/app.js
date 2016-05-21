'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Stella from './stella';
import store from '../store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Stella />
      </Provider>
    );
  }
}
