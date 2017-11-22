import test from 'tape';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  submitLogin,
  dismissSigninError,
  watchDismissSigninError
} from './saga';
import { handleSignin } from '../../shared/api/db';
import userAuthDSM, { dismissErrorAction } from './reducer';

const { reportSuccess, reportError, handleError } = userAuthDSM.actionCreators;


test('SAGA::submitLogin()', nest => {
  nest.test('invoked with a signin action', assert => {
    const iter = submitLogin(userAuthDSM.actionCreators.signIn());

    const msg = 'should yield an Effect of call(handleSignin).';
    const actual = iter.next().value;
    const expected = call(handleSignin);
    assert.same(actual, expected, msg);
    assert.end();
  });
  nest.test('given a user object', assert => {
    const msg = 'should yield an Effect of put(reportSuccess(user))';

    const iter = submitLogin(userAuthDSM.actionCreators.signIn());
    iter.next();

    const user = { name: 'tom'};

    const actual = iter.next(user).value;
    const expected = put(reportSuccess(user));

    assert.same(actual, expected, msg);
    assert.end();
  });
  nest.test('given an error', assert => {
    const msg = 'should yield an Effect of put(reportError(user))';

    const iter = submitLogin(userAuthDSM.actionCreators.signIn());
    const err = new Error('some error');
    iter.next();

    const actual = iter.throw(err).value;
    const expected = put(reportError(err));

    assert.same(actual, expected, msg);
    assert.end();
  });
});

test('SAGA::dissmissSigninError()', assert => {
  const msg = 'should dispatch action that handles error messages.';
  const iter = dismissSigninError();
  const actual = iter.next().value;
  const expected = put(handleError());
  assert.same(actual, expected, msg);
  assert.end();
});

test('SAGA::watchDismissSignin()', assert => {
  const msg = 'should take every dismissErrorAction.type and trigger dismissSigninError';
  const iter = watchDismissSigninError();
  const actual = iter.next().value;
  const expected = takeEvery(dismissErrorAction.type, dismissSigninError);
  assert.same(actual, expected, msg);
  assert.end();
});
