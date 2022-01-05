import React from "react";
import "./SearchBySelect.css";



  const SearchBySelect = ({ value, onChange }) => {

  return (
    <div className="selectFilter">
      <div className="subSelectFilter">
        <label>SORT BY</label>
        <select className="selectList" value={value} onChange={onChange}>
          <option value="">SORT BY</option>
          <option value="name">name</option>
          <option value="description">description</option>
          <option value="price">price</option>
          <option value="shipping">shipping</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBySelect;
