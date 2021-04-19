import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// *component imports
import Home from "./Components/Home";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
