//NPM
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
//CSS
import "./assets/styles.css";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import lightGreen from "material-ui/colors/lightGreen";
import lightBlue from "material-ui/colors/lightBlue";
//JS
import IntroContainer from "./containers/intro-container";
import IndexContainer from "./containers/index-container";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
require('dotenv').config();


export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[500],
      contrastText: "#fff"
    },
    secondary: {
      main: lightGreen[500],
      contrastText: "#fff"
    }
  },
  status: {
    danger: "orange"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/summoner/:player" component={IndexContainer} />
          <Route path="/" component={IntroContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
