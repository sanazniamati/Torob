import React from "react";
import "./Header.css";
import Menubar from "./Menubar";
import Loginbtn from "./Loginbtn";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-container">
          <Menubar />
          <Loginbtn />
        </div>
      </header>
    </>
  );
}
