/* @flow */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { devToolsEnhancer } from 'redux-devtools-extension';

const state = {
  env: process.env,
  // Pass other initial state 
};

const initialState = () => state;

const rootReducer = asyncReducers =>
  combineReducers({
    location: routerReducer,
    root: initialState,
    ...asyncReducers,
  });

export const history = createHistory();

export const initiateStore = () => {
  const middleware = routerMiddleware(history);

  let enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    enhancers = [
      devToolsEnhancer(),
      ...enhancers,
    ];
  }

  const store = createStore(
    rootReducer(),
    compose(applyMiddleware(middleware), ...enhancers),
  );

  return store;
};
