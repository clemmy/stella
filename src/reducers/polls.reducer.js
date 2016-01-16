'use strict';

import { List } from 'immutable';
import { ADD_POLL } from '../actions';

export default function polls(state = List(), action) { //uhhh
  switch (action.type) {
    case ADD_POLL:
      let { poll } = action;
      let newPoll = {
        title: poll.title
      };

      return state.push(newPoll);
    default:
      return state;
  }
}
