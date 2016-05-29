import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { LOGIN, LOGOUT, setSessionInfo, setRoute } from '../actions';
import { performReq } from '../utils';

export function* watchAuthSaga() {
  yield [
    takeEvery(LOGIN, login),
    takeEvery(LOGOUT, logout)
  ];
}

export function* login(action) {
  const url = 'http://10.0.0.35:8069/v1/login';

  try {
    const user = yield call(performReq, url, {
      method: 'POST',
      body: {
        username: action.info.email,
        password: action.info.password
      }
    });

    yield put(setSessionInfo(user));

    action.navigator.push({
      name: 'home'
    });
    yield put(setRoute('home'));

  } catch(err) {
    err.res
      .json()
      .then((json) => {
        console.log(json)
      });
  }
}

export function* logout() {
  console.log('logging out');
  //TODO: implement this
}
