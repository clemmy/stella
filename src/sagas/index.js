import { watchAuthSaga } from './authSaga'

export default function* rootSaga() {
  yield [
    watchAuthSaga()
  ];
}
