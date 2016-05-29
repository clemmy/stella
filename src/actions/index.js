'use strict';

export const SET_ROUTE = 'SET_ROUTE';
export const ADD_POLL = 'ADD_POLL';
export const LOGIN = 'LOGIN';
export const SET_SESSION_INFO = 'SET_SESSION_INFO';
export const LOGOUT = 'LOGOUT';

export function setRoute(route) {
  return {
    type: SET_ROUTE,
    route
  };
}

export function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll
  };
}

export function setSessionInfo(info) {
  return {
    type: SET_SESSION_INFO,
    info
  };
}

export function login(info, navigator) {
  return {
    type: LOGIN,
    info,
    navigator
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
