import React from "react";
import "./MenuContent.css";

export default function MenuContent() {
  return (
    <div className="dropdown__content">
      <div>
        <a className="link-on-click undifned" href="/">
          <div className="droptitle">موبایل و تبلت</div>
        </a>
        <ul className="dropitems"></ul>
      </div>
    </div>
  );
}
