import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import "./App.css";

const ComputerPage = () => (
  <div>
    <h1>This is the computer page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ComputerPage} />
      </Switch>
    </div>
  );
}

export default App;
