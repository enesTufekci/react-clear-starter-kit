/* @flow */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { zenReducer } from 'screens/App/screens/Zen/reducer';

const state = {
  env: process.env,
  // Pass other initial state 
};

const initialState = () => state;

const rootReducer = () =>
  combineReducers({
    location: routerReducer,
    root: initialState,
    zen: zenReducer,
  });

export default rootReducer;
