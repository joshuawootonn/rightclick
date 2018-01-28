import React from "react";

const SearchComponent = props => {
  return (
    <div className="field has-addons has-addons-right">
      <p className="control">
        <input
          className="input"
          type="text"
          placeholder="Summoner"
          {...props.input}
        />
      </p>
      <p className="control">
        <button type="submit" className="button is-primary">
          Search
        </button>
      </p>
    </div>
  );
};

export default SearchComponent;
