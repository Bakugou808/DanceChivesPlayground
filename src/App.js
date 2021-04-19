import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// * Component Imports
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup";
import Header from "./Components/SharedComponents/Header";

function App() {
  return (
    <div className="App">
      <Header />
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
