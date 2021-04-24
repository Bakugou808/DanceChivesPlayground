import React from "react";
import { Route, Switch } from "react-router-dom";

// * Component Imports
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Header from "./SharedComponents/Header";
import ResultsPage from "./Results/ResultsPage";
import AboutPage from "./About/About";
import ContactPage from "./Contact/Contact";
import DanceStyles from "./DanceStyles/DanceStyles";
import BreakingInfo from "./DanceStyles/BreakingInfo";
import HipHopInfo from "./DanceStyles/HipHopInfo";
import HouseInfo from "./DanceStyles/HouseInfo";
import LockingInfo from "./DanceStyles/LockingInfo";
import PoppingInfo from "./DanceStyles/PoppingInfo";
import VogueingInfo from "./DanceStyles/VogueingInfo";
import WaackingInfo from "./DanceStyles/WaackingInfo";
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
        <Route exact path="/styles">
          <DanceStyles />
        </Route>

        {/* nested styles routes */}
        <Route path={`styles/hip-hop`}>
          <HipHopInfo />
        </Route>
        <Route path={`styles/breaking`}>
          <BreakingInfo />
        </Route>
        <Route path={`styles/popping`}>
          <PoppingInfo />
        </Route>
        <Route path={`styles/house`}>
          <HouseInfo />
        </Route>
        <Route path={`styles/waacking`}>
          <WaackingInfo />
        </Route>
        <Route path={`styles/vogueing`}>
          <VogueingInfo />
        </Route>
        <Route path={`styles/locking`}>
          <LockingInfo />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default RoutesTree;
