import React from "react";
import "./AsideContent.css";
import { useState } from "react";
import MobileBrand from "../../../../data.json";
import dropdownIcon from "../../../assets/images/dropdown_icon.svg";
const Similar_categories = [
  { id: 0, categories: "گوشی موبایل" },
  { id: 1, categories: "تبلت" },
  { id: 2, categories: "هدفون،هدست و هندزفری" },
  { id: 3, categories: "لوازم جانبی موبایل و تبلت" },
  { id: 4, categories: "قطعات موبایل و تبلت" },
  { id: 5, categories: "  لوازم الکتریکی همراه " },
  { id: 6, categories: "  ساعت و مچ بند هوشمند   " },
];
export default function AsideContent() {
  const [firstDivIsActive, setfirstDivIsActive] = useState(true);
  const show = () =>
    setfirstDivIsActive((firstDivIsActive) => !firstDivIsActive);
  // div2
  const [div2IsActive, setDiv2IsActive] = useState(true);
  const showdiv2 = () =>
    setDiv2IsActive((div2IsActive) => !div2IsActive)(
      (div2IsActive) => !div2IsActive
    );
  const [searchTerm, setSearchTerm] = useState("");
  const searchText = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className="right_content">
        <div className="filter_container">
          {/* div1 */}
          <div className="filter_row">
            <div className="filter_title_container" onClick={show}>
              <div className="filter_title">انتخاب برند</div>
              <div className="icon_container">
                <div className="svg_style">
                  <img src={dropdownIcon} alt="dropdownIcon" />
                </div>
              </div>
            </div>
            {firstDivIsActive ? (
              <>
                {" "}
                <div
                  className="filter_searchbox_container"
                  style={{ marginTop: 18 }}
                >
                  <form>
                    <div className="input_wrapper">
                      <input
                        id="search-query"
                        placeholder="جستجوی برند"
                        autocomplete="off"
                        value={searchTerm}
                        onChange={searchText}
                      />
                      <div className="svg_style ">
                        <svg
                          fill="#808080"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          alt="search"
                        >
                          {" "}
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>{" "}
                          <path d="M0 0h24v24H0z" fill="none"></path>{" "}
                        </svg>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="filter_brand_container">
                  {MobileBrand.filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.nameE
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.nameF.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  }).map((item) => (
                    <a href="/" className="filter_brand">
                      <div className="filter_brand_item">{item.nameF}</div>
                      <div className="filter_brand_item">{item.nameE}</div>
                    </a>
                  ))}
                  <div>
                    <div style={{ display: "flex", cursor: "pointer" }}>
                      <div
                        style={{
                          padding: 12,
                          color: "black",
                          display: "flex",
                          fontWeight: 500,
                        }}
                      >
                        نمایش سایر برندها
                        <div className="svg_style">
                          <svg
                            viewBox="0 0 34 34"
                            xmlns="http://www.w3.org/2000/svg"
                            alt="chevron-down"
                          >
                            <g>
                              <path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
          {/* div2 */}
          <div className="filter_row">
            <div className="filter_title_container" onClick={showdiv2}>
              <div className="filter_title">دسته های مشابه</div>
              <div className="icon_container">
                <div className="svg_style">
                  <svg
                    fill="currentColor"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    // xmlns="http://www.w3.org/2000/svg"
                    alt="chevron-down"
                    style={{ transform: " rotate(180deg)" }}
                  >
                    <g>
                      <path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            {div2IsActive ? (
              <div style={{ height: 345 }}>
                <a href="/" className="parents">
                  <div className="chev">
                    <div class="svg_style ">
                      <div className="svg_style">
                        <img
                          src={dropdownIcon}
                          alt="dropdownIcon"
                          style={{
                            width: 20,
                            height: 20,
                            transform: "rotate(90deg)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="leaf">موبایل و تبلت</div>
                </a>
                <a
                  href="/"
                  class="parents last"
                  style={{ marginInlineStart: 25 }}
                >
                  <div className=" chev">
                    <div class="svg_style ">
                      <svg
                        viewBox="0 0 34 34"
                        alt="chevron-down"
                        style={{ transform: "rotate(0deg)" }}
                      >
                        <g>
                          <path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div className="leaf ">
                    {Similar_categories.map((item) => (
                      <div key={item.id}>{item.categories}</div>
                    ))}
                  </div>
                </a>
              </div>
            ) : null}
          </div>
          {/* div3 قیمت تومان */}
          <div className="filter_row">
            <div
              className="filter_title_container"
              style={{ height: 38 }}
              onClick={show}
            >
              <div className="filter_title">قیمت (تومان)</div>
              <div className="icon_container">
                <div className="svg_style">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    alt="chevron-down"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    <g>
                      <path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="price_container">
              <div className="price_inputs">
                <div className="input_wrapper">
                  <span>از</span>
                  <input
                    id="inputMin"
                    value="۰"
                    autocomplete="off"
                    className="input_box"
                  ></input>
                </div>
                <div className="input_wrapper">
                  <span>تا</span>
                  <input
                    id="inputMax"
                    value="۳۴۸٫۰۰۰٫۰۰۰"
                    autocomplete="off"
                    class="input_box"
                  ></input>
                </div>
              </div>
              <div className="button_apply_container">
                <button class="button_apply">اعمال فیلتر قیمت</button>
              </div>
            </div>
          </div>
          {/* جستجو در نتایج */}
          <div className="filter_row">
            <div
              className="filter_title_container"
              style={{ height: "auto" }}
              onClick={show}
            >
              <div className="filter_title"> جستجو در نتایج</div>
              <div className="icon_container">
                <div className="svg_style">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    alt="chevron-down"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    <g>
                      <path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <form className="search_form">
                <div className="input_wrapper search_form_container">
                  <input
                    id="search-query"
                    placeholder="  "
                    value=""
                    autocomplete="off"
                    style={{ order: 1 }}
                  />
                  <div className=" icon-container">
                    <div className="svg_style ">
                      <svg fill="#808080" viewBox="0 0 24 24" alt="search">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>{" "}
                        <path d="M0 0h24v24H0z" fill="none"></path>{" "}
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* نمایش موجودی */}
          <div className="filter_row">
            <div
              className="filter_title_container"
              style={{ height: "auto" }}
              onClick={show}
            >
              <div className="filter_title"> موجودی</div>
              <div className="icon_container">
                <div className="svg_style">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    alt="chevron-down"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    <g>
                      <path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="availabilty_filter">
              <div className="checkbox">
                <div className="svg_style ">
                  <svg
                    fill="white"
                    height="20"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                </div>
              </div>
              <p>نمایش محصولات موجود</p>
            </div>
          </div>
          {/*لیست قیمت گوشی موبایل  */}
          <div className="filter_row">
            <div className="filter_title_container">
              <a href="/" className="price_list_link">
                لیست قیمت گوشی موبایل
              </a>
            </div>
          </div>
          {/* دسته بندی های پر بازدید */}
          <div className="filter_row" style={{ borderBottom: "none" }}>
            <div className="filter_title_container" onClick={show}>
              <div
                className="filter_title"
                style={{ height: 40, marginTop: 14 }}
              >
                {" "}
                دسته بندی های پر بازدید
              </div>
            </div>
            <div className="most_visited_link">
              <a href="/">قیمت گوشی شیائومی</a>
            </div>
            <div className="most_visited_link">
              <a href="/">قیمت گوشی سانسونگ</a>
            </div>
            <div className="most_visited_link">
              <a href="/">قیمت گوشی اپل</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
