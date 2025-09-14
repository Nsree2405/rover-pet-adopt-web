// not using this integrated in header itself
// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = () => (
  <div className="mysearchform">
    <form>
      <input
        className="mysearch"
        type="search"
        placeholder="     Find your homie here..."
      />
      <button className="mysubmit" type="submit">
        Search
      </button>
    </form>
  </div>
);

export default SearchBar;