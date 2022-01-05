import React from "react";
import "./SearchByWords.css";

const SearchByWords = ({ text, onChange }) => {
  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            id="searchText"
            name="searchText"
            placeholder="Search..."
            value={text}
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchByWords;

