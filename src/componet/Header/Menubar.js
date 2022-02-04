import React from "react";
import { useState } from "react";
import "./Menubar.css";
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
  const [showMenuItem, setShowMenuItem] = useState(false);
  const showMenu = () => setShowMenuItem((showMenuItem) => !showMenuItem);
  return (
    <div>
      <div className="menuCats">
        {menuItems.map((item) => (
          <span key={item.id}>
            <div className="dropdown account-dropdown" onClick={showMenu}>
              <a className="dropdown_trigger dropdown-index" href="/">
                {item.name}
              </a>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}
