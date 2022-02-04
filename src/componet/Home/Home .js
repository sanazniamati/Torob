import React from "react";
import "./Home.css";
import torobLogo from "../assets/images/torob_logo.svg";
import search from "../assets/images/search.svg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <div className="logo-wrapper">
          <div className="logo">
            <div>
              <a href="/">
                <img src={torobLogo} alt="torobLogo" />
              </a>
            </div>
          </div>
          <h1 className="logo-text">
            ترب
            <p className="slogan">موتور جستجوی هوشمند خرید</p>
          </h1>
        </div>
        <div className="search">
          <form id="searchFormInput" className="search-form-home">
            <div className="search-icon-home">
              <img
                src={search}
                style={{ width: 20, height: 20 }}
                alt="search"
              />
            </div>
            <input
              type="text"
              className="search-text-home"
              placeholder="نام کالا را وارد کنید"
            />
          </form>
        </div>
        <div className="offers-btn">
          <a className="link-on-click offers-btn-txt" href="/">
            تخفیف&zwnj;ها
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
