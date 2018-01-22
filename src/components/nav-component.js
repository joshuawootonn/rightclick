import React, { Component } from "react";
import SearchContainer from '../containers/search-container'
const NavComponent = props => {
  return (
    <div className="container">
      <header className="navbar navbar-defualt">
        <section className="navbar-section">
          <a href="#" className="navbar-brand mr-2">
            Spectre.css
          </a>
          <a href="#" className="btn btn-link">
            Docs
          </a>
          <a
            href="https://github.com/picturepan2/spectre"
            className="btn btn-link"
          >
            GitHub
          </a>
        </section>
        <section className="navbar-section">
          <SearchContainer />
        </section>
      </header>
    </div>
  );
};

export default NavComponent;
