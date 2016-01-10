'use strict';

export const SET_ROUTE = 'SET_ROUTE';

export function setRoute(route) {
  return {
    type: SET_ROUTE,
    route
  };
};
