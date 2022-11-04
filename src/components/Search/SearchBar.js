import React from "react";
import "./SearchBar.css";
function SearchBar() {

  return (
    <div className="search">
      <div className="searchInputs">
        <input className="search_input"
          type="text"
        />
        <i class='fas fa-search searchIcon'></i>
        </div>
    </div>
  );
}

export default SearchBar;