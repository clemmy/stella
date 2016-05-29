'use strict';

import { Map } from 'immutable';
import { UserRecord } from '../records';
import { SET_SESSION_INFO } from '../actions';

export default function route(state=new UserRecord(), action) {
  switch (action.type) {
    case SET_SESSION_INFO:
      const delta = Map({
        id: action.info.id,
        username: action.info.username,
        firstName: action.info.firstName,
        lastName: action.info.lastName,
        email: action.info.email,
        role: action.info.role,
        squadId: action.info.squadId,
        sessionToken: action.info.sessionToken
      });
      return state.merge(delta);
    default:
      return state;
  }
}
