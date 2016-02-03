'use strict'

import fetch from 'isomorphic-fetch';
import { ROOT_URL, FETCH_LISTS } from './';

export function fetchLists(squadId) {
  return function(dispatch) {
    dispatch({
      type: FETCH_LISTS,
      status: 'in progress'
    });

    const url = `${ROOT_URL}/squad/${squadId}/list`;

    let lists = fetch(url, {
        method: 'get',
        headers: {
          'x-session-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjIsImV4cCI6MTUxNzQzOTA5NTY3Mn0.8Os99-1GCesZhhKtJq6t3gfQNCep0FSIRSQlnsviR0Q'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(json => dispatch({
        type: FETCH_LISTS,
        status: 'success',
        payload: json
      }))
      .catch(err => dispatch({
        type: FETCH_LISTS,
        status: 'error'
      }));
  }
};
