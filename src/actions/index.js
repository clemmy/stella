'use strict';

export const SET_ROUTE = 'SET_ROUTE';
export const ADD_POLL = 'ADD_POLL';
export const LOGIN = 'LOGIN';

export function login(email) {
  return {
    type: LOGIN,
    email
  };
}

export function setRoute(route) {
  return {
    type: SET_ROUTE,
    route
  };
};

export function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll
  };
}
