import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="menuCats">
            <span>
              <div className="dropdown account-dropdown">
                <a className="dropdown_trigger dropdown-index"></a>
              </div>
            </span>
          </div>
          <div className="login-signUp">
            <div className="login-signUp-txt">ورود/ ثبت نام</div>
          </div>
        </div>
      </header>
    </>
  );
}
