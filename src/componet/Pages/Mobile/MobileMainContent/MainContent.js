import React from "react";
import SellItem from "./SellItemMain/SellItem"
import data from "./data";
import "./MainContent.css";
import dropdownicon from "../../../assets/images/dropdown_icon.svg";

export default function MainContent() {
  return (
    <div className="left_content">
      <div className="header_left_container">
        <div className="header_text_menu_left_container">
          <div className="div_inerr_header_menu_left">
            <ol>
              <li>
                <a href="#">همه دسته‌ها</a>
              </li>
              <li className="li_left_header">
                <a href="#">موبایل و تبلت</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="header_dropdown_left_container">
          <div className="text_dropdown">محبوب ترین </div>
          <div>
              <a href="#">
                <img src={dropdownicon} alt="dropdownicon" />
              </a>
            </div>
        </div>
      </div>
      <div className="title_left_container">
        <h1>قیمت انواع محصولات موبایل و تبلت </h1>
      </div>
      <div className="div_item_container">
          {
            data.map((item)=>(
           <SellItem kala={item} key={item.id} />  
          ))}
      </div>
    </div>
  );
}
