import React from "react";
import "./Header.css";
import Menubar from "./Menubar";
import Loginbtn from "./Loginbtn";
import MenuContent from "./MenuContent";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-container">
          <Menubar />
          {/* <MenuContent /> */}
          {/* {showMenuItem ? <MenuContent /> : null} */}
          <Loginbtn />
        </div>
      </header>
    </>
  );
}
