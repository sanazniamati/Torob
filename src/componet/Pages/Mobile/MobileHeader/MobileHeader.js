import React from "react";
import "./MobileHeader.css";
import Menubar from "../../../Header/Menubar";
import Logotorob from "../../../assets/images/torob_logo.svg";
import Loginbtn from "../../../Header/Loginbtn";

export default function MobileHeader() {
  return (
    <div>
      <div className="mobile_header">
        <div
          className="mobile_header_first"
          style={{ display: "flex", direction: "rtl" }}
        >
          <a
            href="/Home"
            style={{
              display: "flex",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            {" "}
            <img
              src={Logotorob}
              style={{ width: 48, height: 48 }}
              alt="trob icon"
            />
            <div
              style={{
                marginRight: 12,
                fontSize: 24,
                color: "#d73948 ",
                fontWeight: "bold",
              }}
            >
              ترب
            </div>
          </a>
          {/* create search box */}
          <div className="search_box">
            <div style={{ maxWidth: 480 }}>
              <div className="search" id="searchBox">
                <form id="searchFormInput" className="search-form">
                  <input
                    type="text"
                    placeholder="نام کالا را وارد کنید"
                    className="search_text search_text_ir"
                  />
                  <div className="search_btn search_btn_ir">
                    <div className="svg_style">
                      <svg
                        fill="white"
                        viewBox="0 0 19 19"
                        // xmlns="http://www.w3.org/2000/svg"
                        alt="search"
                      >
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>{" "}
                        <path d="M0 0h24v24H0z" fill="none"></path>{" "}
                      </svg>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mobile_login_btn">
            <Loginbtn />
          </div>
        </div>
        <div className="mobile_header_secend">
          <Menubar />
        </div>
      </div>
    </div>
  );
}
