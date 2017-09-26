// /* @flow */
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { initiateStore, history } from 'config/store/initiateStore';
import Home from './screens/Home';
import About from './screens/About';

const store = initiateStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
