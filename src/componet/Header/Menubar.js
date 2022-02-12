//librares
import { useState } from "react";
//styles
import "./Menubar.css";
// components
import MobileMenuContent from "./subMenu/Mobile/MobileMenuContent";
import { menuItems } from "./menuItems";

export default function Menubar() {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const showMenu = () => setIsMobileActive((isMobileActive) => !isMobileActive);
  return (
    <div>
      <div className="menuCats">
        {menuItems.map((item, index) => (
          <span>
            <div className="dropdown account-dropdown ">
              <a
                key={index}
                className="dropdown_trigger dropdown-index"
                href="/"
                onClick={showMenu}
              >
                {item.name}
              </a>
            </div>
          </span>
        ))}
      </div>

      <div className="dropdown__content">
        {/* وقتی روی منو موبابل و تبلت کلیک شد زیر منو نشان بده */}
        {isMobileActive ? <MobileMenuContent /> : null}

        {/* <LapTopMenuContent /> */}
      </div>
    </div>
  );
}
