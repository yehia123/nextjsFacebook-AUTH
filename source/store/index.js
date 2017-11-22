import nextConnectRedux from 'next-connect-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import userAuthDSM from '../features/auth/reducer';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../shared/sagas/index';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

const mainReducer = combineReducers({
  auth: userAuthDSM.reducer,
  form: formReducer
});


export const initStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleWare();
  return {
    ...createStore(mainReducer, initialState, applyMiddleware(sagaMiddleware, logger)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export const nextConnect = nextConnectRedux(initStore);
