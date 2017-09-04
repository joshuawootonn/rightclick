import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import promise from 'redux-promise';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import reducers and actions
import reducers from './src/reducers';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
  </Provider>, document.getElementById('app'));