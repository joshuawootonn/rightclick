import React from "react";

const SearchComponent = props => {
  return (
        <input
          className="input"
          type="text"
          placeholder="Summoner"
          {...props.input}
        />
      
  );
};

export default SearchComponent;
