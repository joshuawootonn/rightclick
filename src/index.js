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
import Intro from './containers/container-intro';
import reducers from './reducers';
export const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>        
        <Route path="/" component={Intro} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
