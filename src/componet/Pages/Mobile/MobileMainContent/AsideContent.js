import React from "react";
import "./AsideContent.css";
import { useState } from "react";
const filterData = [
  { id: 1, name: "div1", title: "انتخاب برند" },
  { id: 2, name: "div2", title: "دسته های مشابه" },
  { id: 3, name: "div3", title: "قیمت (تومان)" },
  { id: 4, name: "div4", title: "جستجو در نتایج" },
  { id: 5, name: "div5", title: "موجودی" },
  { id: 6, name: "div6", title: "لیست قیمت گوشی موبایل" },
  { id: 7, name: "div7", title: "دسته بندی های پر بازدید" },
];

export default function AsideContent() {
  const [isActive, setIsActive] = useState(false);
  const show = () => setIsActive((isActive) => !isActive);
  return (
    <>
      <div className="right_content">
        <div className="filter_container">
          {filterData.map((item) => (
            <div className="filter_row" key={item.id}>
              <div className="filter_title_container" onClick={show}>
                <div className="filter_title">{item.title}</div>
                <div className="icon_container">
                  <div className="svg_style">
                    <svg
                      fill="currentColor"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      // xmlns="http://www.w3.org/2000/svg"
                      alt="chevron-down"
                      // style="transform: rotate(0deg);"
                    >
                      <g>
                        <path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {isActive ? (
            <>
              <div className="filter_searchbox_container">salam</div>
              <div className="filter_brand_container">salam</div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
