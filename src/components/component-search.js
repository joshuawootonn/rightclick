import React, { Component } from 'react';

const Search = (props) => {  
  return (
    <div className="input-group">
      <input className="form-input" type="text" placeholder="search" {...props.input}/>
      <button type="submit" className="btn btn-primary input-group-btn">Search</button>
    </div>
  );  
}

export default Search;