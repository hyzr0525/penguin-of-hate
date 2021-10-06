import React from "react";

function Search({setSearchKeyWord}) {

  return (
    <div className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearchKeyWord(e.target.value)}
      />
    </div>
  );
}

export default Search;