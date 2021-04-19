import React from "react";
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

const NavBar = () => {
  let history = useHistory();

  const handleRedirect = (path) => {
    history.push(`${path}`);
  };

  return (
    <div className="navBar">
      <p>Logo</p>
      <p onClick={() => handleRedirect("home")}>Home</p>
      <p onClick={() => handleRedirect("styles")}>Styles</p>
      <p onClick={() => handleRedirect("events")}>Events</p>
      <SearchBar />
    </div>
  );
};

export default NavBar;
