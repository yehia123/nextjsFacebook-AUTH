import test from 'tape';
import dsm from './reducer';
const {
  reducer
} = dsm;

const empty = { type: 'empty'};
const defaultStatus = 'signed-out';
const defaultState = {
  status: defaultStatus,
  payload: empty
};

const createState = (props = {}) => Object.assign({}, defaultState, props);

const {
  initialize,
  signIn,
  cancel,
  reportError,
  handleError,
  reportSuccess,
  signOut,
  signOutSuccess,
  reportSignOutError,
  handleSignOutError
} = dsm.actionCreators;

test('User Reducer', nest => {
  nest.test('with initialize() ()', assert => {
    const msg = 'should return the default state';

    const actual = reducer(createState(), initialize());
    const expected = createState();

    assert.same(actual, expected, msg);
    assert.end();
  });
  nest.test('with signIn()', assert => {
    const msg = 'should transition to a status signing in.';

    const initialState = reducer(createState(), initialize());
    const payload = {
      type: 'request'
    };

    const actual = reducer(initialState, signIn(payload));
    const expected = createState({ status: 'signing-in', payload });

    assert.same(actual, expected, msg);
    assert.end();
  });
  nest.test('with cancel()', assert => {
    const msg = 'should transition to a status signed-out.';

    const previousState = createState({
      status: 'signing-in',
      payload: { type: 'request'}
    });

    const payload = {
      type: 'cancelled-request'
    };

    const actual = reducer(previousState, cancel(payload));

    const expected = createState({ status: 'signed-out', payload });
    assert.same(actual, expected, msg);
    assert.end();
  });
  nest.test('with reportError()', assert => {
    const msg = 'should transition to a status error.';

    // Existing Consitions
    const previousState = createState({
      status: 'signing-in',
      payload: { type: 'request'}
    });

    const payload = {
      type: 'request-error',
      message: new Error('Come awn mann!')
    };

    const actual = reducer(previousState, reportError(payload));
    const expected = createState({ status: 'error', payload });

    assert.same(actual, expected, msg);
    assert.end();
  });
  nest.test('with handleError()', assert => {
    const msg = 'should transition to a status signed-out.';


    // Existing Consitions
    const previousState = createState({
      status: 'error',
      payload: {
        type: 'request-error',
        message: new Error('Come awn mann!')
      }
    });

    const payload = { type: 'handled-error' };

    const actual = reducer(previousState, handleError(payload));
    const expected = createState({payload});

    assert.same(actual, expected, msg);
    assert.end();
  });
  nest.test('with reportSuccess()', assert => {
    const msg = 'should transition to a status signed-in.';

    // Existing Consitions
    const previousState = createState({
      status: 'signing-in',
      payload: { type: 'request'}
    });

    const payload = {
      type: 'signed-in',
      user: {
        name: 'Tom'
      }
    };


    const actual = reducer(previousState, reportSuccess(payload));
    const expected = createState({ status: 'signed-in', payload });

    assert.same(actual, expected, msg);
    assert.end();
  });
  nest.test('with signOut()', assert => {
    const msg = 'should transition to a singing-out state.';

    // Existing Consitions
    const previousState = createState({
      status: 'signed-in',
      payload: {
        type: 'user',
        profile: {
          userName: 'tgrecojs'
        }
      }
    });

    const payload = {
      type: 'request'
    };

    const actual = reducer(previousState, signOut(payload));
    const expected = createState({ status: 'signing-out', payload });

    assert.same(actual, expected, msg);
    assert.end();
  });
  nest.test('with signOutSuccess()', assert => {
    const msg = 'should transition to a signed-out state.';

    // Existing Consitions
    const previousState = createState({
      status: 'signing-out',
      payload: { type: 'request'}
    });

    const payload = {
      type: 'request-success'
    };

    const actual = reducer(previousState, signOutSuccess(payload));
    const expected = createState({ status: 'signed-out', payload });

    assert.same(actual, expected, msg);
    assert.end();
  });
  nest.test('with reportSignOutError()', assert => {
    const msg = 'should transition to a sign-out-error state.';

    // Existing Consitions
    const previousState = createState({
      status: 'signing-out',
      payload: { type: 'request'}
    });

    const payload = {
      type: 'error',
      code: 401,
      message: new Error('Sign out error')
    };

    const actual = reducer(previousState, reportSignOutError(payload));
    const expected = createState({  status: 'sign-out-error', payload });

    assert.same(actual, expected, msg);
    assert.end();
  });
  nest.test('with handleSignOutError()', assert => {
    const msg = 'should transition to a signed-in state.';

    // Existing Consitions
    const previousState = createState({
      status: 'sign-out-error',
      payload: { type: 'error',
        code: 401,
        message: new Error('User Auth error!')
      }
    });

    const payload = {
      type: 'user',
      profile: { name: 'Tom '}
    };

    const actual = reducer(previousState, handleSignOutError(payload));
    const expected = createState({ status: 'signed-in', payload });

    assert.same(actual, expected, msg);
    assert.end();
  });
});
