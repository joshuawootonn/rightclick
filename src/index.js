//NPM
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
//CSS
import "./assets/styles.css";
//JS
import IntroContainer from './containers/intro-container';
import IndexContainer from './containers/index-container';
import reducers from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension'
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>       
        <Route path="/:player" component={IndexContainer} />
        <Route path="/" component={IntroContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
