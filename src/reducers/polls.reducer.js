'use strict';

import { List } from 'immutable';
import { ADD_POLL } from '../actions';

export default function polls(state = List(), action) {
  switch (action.type) {
    case ADD_POLL:
      let { poll } = action;
      let newPoll = {
        title: poll.title,
        pollOptions: poll.pollOptions
      };

      return state.push(newPoll);
    default:
      return state;
  }
}
