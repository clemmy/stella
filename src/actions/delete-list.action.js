'use strict'

import fetch from 'isomorphic-fetch';
import { ROOT_URL, DELETE_LIST } from './';

export function deleteList(listId) {
  return function(dispatch) {
    dispatch({
      type: DELETE_LIST,
      status: 'in progress'
    });

    const url = `${ROOT_URL}/res/list/${listId}`;

    let lists = fetch(url, {
        method: 'delete',
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
        type: DELETE_LIST,
        status: 'success',
        payload: json
      }))
      .catch(err => dispatch({
        type: DELETE_LIST,
        status: 'error'
      }));
  }
};
