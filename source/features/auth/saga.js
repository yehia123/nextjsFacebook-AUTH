import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import userAuthDSM, { dismissErrorAction } from './reducer';
import { handleSignin } from '../../shared/api/db';
// import Router from 'next/router';

const { reportSuccess, reportError, handleError} = userAuthDSM.actionCreators;

export function* submitLogin() {
  try {
    const payload = yield call(handleSignin);
    yield put(reportSuccess(payload));
  } catch (e) {
    yield put(reportError(e));
  }
}

export function* dismissSigninError() {
  yield put(handleError());
}

export function* watchDismissSigninError() {
  yield takeEvery(dismissErrorAction.type, dismissSigninError);
}

export default function * watchSubmit() {
  yield takeLatest(userAuthDSM.actions.signIn, submitLogin);
};
