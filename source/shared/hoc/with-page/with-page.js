import withEnv from '../with-env/with-env-component';
import { nextConnect } from '../../../store/index';
import { initializeDB } from '../with-env/with-env-reducer';
import withMui from '../with-mui';
import { compose } from 'redux';
import { initializeAuth } from '../../../features/auth/reducer';

export default Component => compose(
  nextConnect(state => state, { initializeDB, initializeAuth }),
  withEnv,
  withMui
)(Component);
