import React from "react";

import { Switch } from "react-router-dom";

import HomePage from "./pages/home-page";

import "./App.css";

function App() {
  return (
    <Switch>
      <HomePage />
    </Switch>
  );
}

export default App;
