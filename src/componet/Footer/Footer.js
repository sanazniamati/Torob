import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer_div">
          <div className="foote_div_float_left">
            <a class="jsx-234733792 footerLink" href="/shop-list/"> لیست فروشگاه‌ها </a>
            <a  href="https://panel.torob.com/" target="_blank"> ثبت‌نام‌ فروشگاه‌ها</a>
            <a  href="https://panel.torob.com/" target="_blank">پنل فروشگاه‌ها</a>
            <a  href="/pages/careers/"> فرصت‌های شغلی </a> 
          </div>
          <div className="footer_div_float_right">
            <a  href="/pages/safe-shopping-guide/">راهنمای خرید امن </a>
            <a  href="/feedback/complaints/1/">پیگیری سفارش</a>
            <a  href="/pages/contact-us/"> تماس با ما</a>
            <a  href="/pages/about-us/"> درباره ترب </a>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
