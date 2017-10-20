/* @flow */
import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

export const history = createHistory();

export const initiateStore = () => {
  const middleware = [
    routerMiddleware(history),
    thunk,
  ];

  let enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    enhancers = [
      devToolsEnhancer(),
      ...enhancers,
    ];
  }

  const store = createStore(
    rootReducer(),
    compose(applyMiddleware(...middleware), ...enhancers),
  );

  return store;
};
