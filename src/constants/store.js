'use strict';

import { List } from 'immutable';
import { UserRecord } from '../records';

const INITIAL_STATE = {
  route: 'login',
  polls: List([]),
  user: new UserRecord()
};

export default INITIAL_STATE;
