import React from "react";

const Search = () => {
  return (
    <div className="search-popup">
      <div className="search-popup__overlay search-toggler"></div>
      <div className="search-popup__content">
        <form action="#">
          <label for="search" className="sr-only">
            search here
          </label>
          <input type="text" id="search" placeholder="Search Here..." />
          <button type="submit" aria-label="search submit" className="thm-btn2">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;