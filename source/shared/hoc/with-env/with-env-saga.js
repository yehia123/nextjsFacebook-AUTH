import { takeEvery, call } from 'redux-saga/effects';
import {
  initializeDB
} from './with-env-reducer';
import initialize from '../../api/db';

const log = (...args) => console.log(...args);

// subroutines
export function* handleInitializeDB(action) {
  try {
    const { payload } = action;
    yield call(initialize.initializeDB, payload);
  } catch (e) {
    yield call(log, `Error while initializing db: ${e}`);
  }
}

// watchers
export function* watchInitializeDB() {
  yield takeEvery(initializeDB().type, handleInitializeDB);
}

export default function* withEnvSaga() {
  yield watchInitializeDB();
}

// export default withEnvSaga;
