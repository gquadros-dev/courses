import { all } from 'redux-saga/effects';

import auth from './Auth/sagas';

export default function* rootSaga() {
  return yield all([auth]);
}
