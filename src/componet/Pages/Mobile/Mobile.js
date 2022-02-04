import React from "react";
import "./Mobile.css";
import MobileHeader from "../Mobile/MobileHeader/MobileHeader";
import AsideContent from "./MobileMainContent/AsideContent";
import MainContent from "./MobileMainContent/MainContent";

function Mobile() {
  return (
    <>
      <MobileHeader />
      <section id="container">
        <MainContent />
        <AsideContent />
      </section>
    </>
  );
}

export default Mobile;
