import {
  all,
  call
} from 'redux-saga/effects';
import submitLoginSaga, {
  watchDismissSigninError
} from '../../features/auth/saga';
import {
  watchInitializeDB
} from '../hoc/with-env/with-env-saga';


export default function* rootSaga() {
  yield all([
    call(watchInitializeDB),
    call(submitLoginSaga)
  ]);
};

// https://github.com/redux-saga/redux-saga/issues/160
