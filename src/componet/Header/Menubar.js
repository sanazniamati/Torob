import React from "react";
import { useState } from "react";
import "./Menubar.css";
import MobileMenuContent from "./subMenu/Mobile/MobileMenuContent";
// import LapTopMenuContent from "./subMenu/Laptop&PC/LapTopMenuContent";

// import FirstItem from "./itemMenu/FirstItem";

const menuItems = [
  { name: "موبایل و تبلت", id: 0 },
  { name: "لپ تاپ،کامپیوتر،اداری", id: 1 },
  { name: "هایپر مارکت", id: 2 },
  { name: "لوازم خانگی", id: 3 },
  { name: "پوشاک،کیف و کفش", id: 4 },
  { name: "زیبایی و بهداشت", id: 5 },
  { name: "صوتی و تصویری", id: 6 },
  { name: "سایر دسته ها", id: 7 },
];
export default function Menubar() {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const showMenu = () => setIsMobileActive((isMobileActive) => !isMobileActive);
  return (
    <div>
      <div className="menuCats">
        {/* <FirstItem /> */}
        {menuItems.map((item) => (
          <span>
            <div className="dropdown account-dropdown ">
              <a
                key={item.id}
                className="dropdown_trigger dropdown-index"
                href="/"
                onClick={showMenu}
              >
                {/* موبایل و تبلت */}
                {item.name}
              </a>
            </div>
          </span>
        ))}
      </div>
      {/* subMenu if showMenuItem=true show subMenuContent */}
      <div className="dropdown__content">
        {/* {isMobileActive ? (
          <div style={{ width: 300, height: 300, color: "red" }}></div>
        ) : null} */}
        {/* <MobileMenuContent /> */}
        {isMobileActive ? <MobileMenuContent /> : null}
        {/* <LapTopMenuContent /> */}
      </div>
    </div>
  );
}
