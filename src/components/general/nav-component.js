import React from "react";
import SearchContainer from "../../containers/general/search-container";
import { Link } from "react-router-dom";
const NavComponent = props => {
  return (    
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          RightClick.gg
        </Link>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <SearchContainer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
