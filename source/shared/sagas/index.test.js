import test from 'tape';
import { submitLogin } from './index';
import dsm from '../../features/auth/reducer';
test('submitLogin saga', assert => {
  const msg = 'should trigger on the signin action.';

  const actual = '';
  const expected = submitLogin(dsm.actions.signin).next();
  assert.same(actual, expected, msg);
  assert.end();
});
