import React from "react";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page";
import LoginPage from "./pages/log-in-page";
import SignInPage from "./pages/sign-in-page";
import MapPage from "./pages/map-page";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/log-in" exact component={LoginPage} />
      <Route path="/sign-in" exact component={SignInPage} />
      <Route path="/map" component={MapPage} />
    </Switch>
  );
}

export default App;
