import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={LandingPage} />
      <Route path="/app" render={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
