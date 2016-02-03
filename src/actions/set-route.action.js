'use strict'

import { SET_ROUTE } from './';

export function setRoute(route) {
  return {
    type: SET_ROUTE,
    route
  };
};
