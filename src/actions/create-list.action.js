'use strict'

import fetch from 'isomorphic-fetch';
import { ROOT_URL, CREATE_LIST } from './';

export function createList(userId, squadId) {
  return function(dispatch) {
    dispatch({
      type: CREATE_LIST,
      status: 'in progress'
    });

    const url = `${ROOT_URL}/res/list`;

    let lists = fetch(url, {
        method: 'post',
        headers: {
          'x-session-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjIsImV4cCI6MTUxNzQzOTA5NTY3Mn0.8Os99-1GCesZhhKtJq6t3gfQNCep0FSIRSQlnsviR0Q',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'New List',
          userId: userId,
          squadId: squadId,
          isActive: true,
          userLastUpdatedId: userId,
          listItems: []
        })
      })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(json => dispatch({
        type: CREATE_LIST,
        status: 'success',
        payload: json
      }))
      .catch(err => dispatch({
        type: CREATE_LIST,
        status: 'error'
      }));
  }
};
