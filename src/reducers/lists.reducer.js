'use strict';

import { FETCH_LISTS } from '../actions';

export default function lists(state = [], action) {
  switch (action.type) {
    case FETCH_LISTS:
      if (action.status == 'success') {
        let newPayload = action.payload.map((list) => {
          if (list && !list.listItems) list.listItems = [];
          return list;
        });
        console.log('New List payload:', newPayload);

        return newPayload;
      }
      // do nothing otherwise
    default:
      return state;
  }
}
