// /* @flow */
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { initiateStore, history } from 'config/store/initiateStore';

import Layout from './components/Layout';
import Home from './screens/Home';
import About from './screens/About';
import Zen from './screens/Zen';

const store = initiateStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/zen" component={Zen} />
        <Route path="/about" component={About} />
      </Layout>
    </ConnectedRouter>
  </Provider>
);

export default App;
