import React, { Component } from "react";
import SearchByWords from "../SearchByWords";
import "./TopBar.css";
import WatchList from "../WatchList";

const TopBar = ()=> {
  
  return (
      <div>
        <div className="topBar">
          <div>
            <img src="./logo.png" alt="logo" className="leftLogo"></img>
          </div>
          <div>
            <img src="./user.png" alt="logo" className="user"></img>
          </div>
        </div>
      </div>
    );
  
}
export default TopBar;
