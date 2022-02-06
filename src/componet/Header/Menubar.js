import React from "react";
import { useState } from "react";
import "./Menubar.css";
import MobileMenuContent from "./subMenu/Mobile/MobileMenuContent";
import LapTopMenuContent from "./subMenu/Laptop&PC/LapTopMenuContent";

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
  const [isMoboleActive, setIsMoboleActive] = useState(false);
  const showMenu = () => setIsMoboleActive((isMoboleActive) => !isMoboleActive);
  return (
    <div>
      <div className="menuCats">
        {menuItems.map((item) => (
          <span>
            <div className="dropdown account-dropdown ">
              <a
                key={item.id}
                className="dropdown_trigger dropdown-index"
                href="/"
                onClick={showMenu}
              >
                {item.name}
              </a>
            </div>
          </span>
        ))}
        {/* subMenu if showMenuItem=true show subMenuContent */}
        <div className="dropdown__content">
          {/* <MobileMenuContent /> */}
          {isMoboleActive ? <MobileMenuContent /> : null}

          {/* <LapTopMenuContent /> */}
        </div>
      </div>
    </div>
  );
}
