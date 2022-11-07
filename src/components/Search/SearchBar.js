import React from "react";
import "./SearchBar.css";
function SearchBar() {

  return (
    <div className="searchpage">
      <h1 className="searchheading">SEARCH HERE</h1>
      <div className="search">
        <div className="searchInputs">
          <input className="search_input"
            type="text"
          />
          <i class='fas fa-search searchIcon'></i>
          </div>
      </div>
    </div>
  );
}

export default SearchBar;