import React from "react";
import { useState } from "react";
import ItemsArray from "../../mock-data/ItemsArray";
import Item from "../Item";

let filteredArray;
const SearchResults = ({ selectedChoice, inputValue }) => {

    console.log(selectedChoice);
    console.log(inputValue);

    // const [filteredArray, setFilteredArray] = useState("");

    if (inputValue) {
      filteredArray = ItemsArray.filter((item) => {
        return item.name.toLowerCase().includes(inputValue.toLowerCase());
      });
      console.log(filteredArray);
    }
  
  return null

}





export default SearchResults;