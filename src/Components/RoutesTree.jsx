import React from "react";
import { Route, Switch } from "react-router-dom";

// * Component Imports
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Header from "./SharedComponents/Header";
import ResultsPage from "./Results/ResultsPage";
import AboutPage from "./About/About";
import ContactPage from "./Contact/Contact";

const RoutesTree = () => {
  return (
    <div>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/results">
          <ResultsPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default RoutesTree;
