import React, { useState } from "react";
// * Component Imports
import SearchBar from "./SearchBar";
// * Utils Imports
// import { redirect } from "../../utils/routerTools";
// *react-router imports
import {
  useHistory,
  Link,
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
            <li className="dropdown-item">
              <Link to={"styles/hip-hop"} replace="true">
                Hip-Hop
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to={"styles/breaking"} replace="true">
                Breaking
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to={"styles/popping"} replace="true">
                Popping
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to={"styles/house"} replace="true">
                House
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to={"styles/waacking"} replace="true">
                Waacking
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to={"styles/locking"} replace="true">
                Locking
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to={"styles/vogueing"} replace="true">
                Vogue-ing
              </Link>
            </li>
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
              <Link to={"/find_events"}>Find Events</Link>
            </div>
            <div className="dropdown-item">
              <Link to={"/recent_events"}>Recent Events</Link>
            </div>
            <div className="dropdown-item">
              <Link to={"/submit_event_info"}>Submit Event Info</Link>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/"}>Home</Link>
      <Link to={"/styles"}>Styles</Link>
      <Link to={"/events"}>Events</Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
