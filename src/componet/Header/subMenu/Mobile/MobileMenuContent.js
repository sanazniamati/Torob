import React from "react";
import "./MobileMenuContent.css";
import mobileTable from "../../../../mobileTable.json";
import tabletTable from "../../../../tabletTable.json";

export default function MobileMenuContent() {
  return (
    <div>
      <a className="link-on-click undifned" href="/">
        <div className="droptitle">موبایل و تبلت</div>
      </a>
      <ul className="dropitems">
        {/* گوشی موبایل */}
        <div className="columnelement">
          <a href="/" className="link_on_click subtitle">
            <span>گوشی موبایل</span>
          </a>
          <ul className="subsubitem">
            {mobileTable.map((item) => (
              <div>
                <a href="/" className="link_on_click grayhover">
                  <span>{item.nameF}</span>
                </a>
              </div>
            ))}
          </ul>
        </div>
        {/* تبلت */}
        <div className="columnelement">
          <a href="/" className="link_on_click subtitle">
            <span> تبلت</span>
          </a>
          <ul className="subsubitem">
            {tabletTable.map((item) => (
              <div>
                <a href="/" className="link_on_click grayhover">
                  <span key={item.id}> {item.nameF}</span>
                </a>
              </div>
            ))}
          </ul>
        </div>
        {/* هدفون،هدست،هندزفری */}
        <div className="columnelement">
          <a href="/" className="link_on_click subtitle">
            <span>هدفون،هدست،هندزفری </span>
          </a>
          <ul className="subsubitem">
            {tabletTable.map((item) => (
              <div>
                <a href="/" className="link_on_click grayhover">
                  <span key={item.id}> {item.nameF}</span>
                </a>
              </div>
            ))}
          </ul>
        </div>
        {/* لوازم جانبی */}
        <div className="columnelement">
          <a href="/" className="link_on_click subtitle">
            <span>لوازم جانبی موبایل و تبلت </span>
          </a>
          <ul className="subsubitem">
            {tabletTable.map((item) => (
              <div>
                <a href="/" className="link_on_click grayhover">
                  <span key={item.id}> {item.nameF}</span>
                </a>
              </div>
            ))}
          </ul>
        </div>
        {/* قطعات موبایل و تبلت */}
        <div className="columnelement">
          <a href="/" className="link_on_click subtitle">
            <span>قطعات موبایل و تبلت </span>
          </a>
          <ul className="subsubitem">
            {tabletTable.map((item) => (
              <div>
                <a href="/" className="link_on_click grayhover">
                  <span key={item.id}> {item.nameF}</span>
                </a>
              </div>
            ))}
          </ul>
        </div>
        {/* لوازم الکتریکی همراه */}
        <div className="columnelement">
          <a href="/" className="link_on_click subtitle">
            <span>لوازم الکتریکی همراه </span>
          </a>
          <ul className="subsubitem">
            {tabletTable.map((item) => (
              <div>
                <a href="/" className="link_on_click grayhover">
                  <span key={item.id}> {item.nameF}</span>
                </a>
              </div>
            ))}
          </ul>
        </div>
        {/* ساعت و مچ بند هوشمند */}
        <div className="columnelement">
          <a href="/" className="link_on_click subtitle">
            <span>ساعت و مچ بند هوشمند </span>
          </a>
          <ul className="subsubitem">
            {tabletTable.map((item) => (
              <div>
                <a href="/" className="link_on_click grayhover">
                  <span key={item.id}> {item.nameF}</span>
                </a>
              </div>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
}
