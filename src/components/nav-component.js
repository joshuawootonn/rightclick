import React from "react";
import SearchContainer from "../containers/search-container";
import { Link } from "react-router-dom";
const NavComponent = props => {
  return (
    <div className="container">
      <header className="navbar navbar-defualt">
        <section className="navbar-section">
          <Link className="navbar-brand mr-2" to="/">
            RightClick.gg
          </Link>
        </section>
        <section className="navbar-section">
          <SearchContainer />
        </section>
      </header>
    </div>
  );
};

export default NavComponent;
