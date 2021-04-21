import React, { useState } from "react";
// * Component Imports
import SearchBar from "./SearchBar";
// * Utils Imports
// import { redirect } from "../../utils/routerTools";
// *react-router imports
import {
  useHistory,
  // useLocation,
  // useParams,
  // useRouteMatch,
} from "react-router-dom";
import DanceStyles from "../DanceStyles/DanceStyles";

const NavBar = () => {
  let history = useHistory();
  const [toggleStyles, setStylesToggle] = useState(false);
  const [toggleEvents, setEventsToggle] = useState(false);

  const handleRedirect = (path) => {
    history.push(`${path}`);
  };

  const toggleMenu = (category) => {
    category === "styles"
      ? setStylesToggle((prev) => !prev)
      : setEventsToggle((prev) => !prev);
  };

  return (
    <div className="navBar">
      <p>Logo</p>
      <div className={toggleStyles ? "dropdown is-active" : "dropdown"}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu2"
            onClick={() => toggleMenu("styles")}
          >
            <span>Styles</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <p>Hip-Hop</p>
            </div>
            {/* <hr className="dropdown-divider"> */}
            <div className="dropdown-item">
              <p>Breaking</p>
            </div>
            {/* <hr className="dropdown-divider"> */}
            <div className="dropdown-item">
              <p>Popping</p>
            </div>
            {/* <hr className="dropdown-divider"> */}
            <div className="dropdown-item">
              <p>House</p>
            </div>
            {/* <hr className="dropdown-divider"> */}
            <div className="dropdown-item">
              <p>Waacking</p>
            </div>
            {/* <hr className="dropdown-divider"> */}
            <div className="dropdown-item">
              <p>Locking</p>
            </div>
            {/* <hr className="dropdown-divider"> */}
            <div className="dropdown-item">
              <p>Vogueing</p>
            </div>
          </div>
        </div>
      </div>
      <div className={toggleEvents ? "dropdown is-active" : "dropdown"}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu2"
            onClick={() => toggleMenu("events")}
          >
            <span>Events</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <p>Find Events</p>
            </div>
            {/* <hr className="dropdown-divider"> */}
            <div className="dropdown-item">
              <p>Recent Events</p>
            </div>
            {/* <hr className="dropdown-divider"> */}
            <div className="dropdown-item">
              <p>Submit Event Info</p>
            </div>
          </div>
        </div>
      </div>
      <p onClick={() => handleRedirect("home")}>Home</p>
      <p onClick={() => handleRedirect("styles")}>Styles</p>
      <p onClick={() => handleRedirect("events")}>Events</p>
      <SearchBar />
    </div>
  );
};

export default NavBar;
