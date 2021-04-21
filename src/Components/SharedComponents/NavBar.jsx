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
              <p onClick={() => handleRedirect("styles/hip-hop")}>Hip-Hop</p>
            </div>
            <div className="dropdown-item">
              <p onClick={() => handleRedirect("styles/breaking")}>Breaking</p>
            </div>
            <div className="dropdown-item">
              <p onClick={() => handleRedirect("styles/popping")}>Popping</p>
            </div>
            <div className="dropdown-item">
              <p onClick={() => handleRedirect("styles/house")}>House</p>
            </div>
            <div className="dropdown-item">
              <p onClick={() => handleRedirect("styles/waacking")}>Waacking</p>
            </div>
            <div className="dropdown-item">
              <p onClick={() => handleRedirect("styles/locking")}>Locking</p>
            </div>
            <div className="dropdown-item">
              <p onClick={() => handleRedirect("styles/vogueing")}>Vogue-ing</p>
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
              <p onClick={() => handleRedirect("/find_events")}>Find Events</p>
            </div>
            <div className="dropdown-item">
              <p onClick={() => handleRedirect("/recent_events")}>
                Recent Events
              </p>
            </div>
            <div className="dropdown-item">
              <p onClick={() => handleRedirect("/submit_event_info")}>
                Submit Event Info
              </p>
            </div>
          </div>
        </div>
      </div>
      <p onClick={() => handleRedirect("home")}>Home</p>
      <p onClick={() => handleRedirect("styles")}>Styles</p>
      <p onClick={() => handleRedirect("")}>Events</p>
      <SearchBar />
    </div>
  );
};

export default NavBar;
