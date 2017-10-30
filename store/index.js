import {createStore, combineReducers, applyMiddleware} from "redux";
import withRedux from "next-redux-wrapper";
import logger from 'redux-logger';
import { reducer } from './reducer';

const makeStore = (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(logger));
}

export default makeStore
