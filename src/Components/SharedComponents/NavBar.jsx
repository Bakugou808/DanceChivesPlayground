import React from "react";
// * Component Imports
import SearchBar from "./SearchBar";
const NavBar = () => {
  return (
    <div className="navBar">
      <p>Logo</p>
      <p>Home</p>
      <p>Styles</p>
      <p>Events</p>
      <SearchBar />
    </div>
  );
};

export default NavBar;
