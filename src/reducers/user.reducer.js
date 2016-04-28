'use strict';

import { Map } from 'immutable';
import { LOGIN } from '../actions';

export default function route(state = new Map(), action) {
  switch (action.type) {
    case LOGIN:
      return state.set('email', action.email);
    default:
      return state;
  }
}
