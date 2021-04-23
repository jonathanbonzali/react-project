import React from "react";
import "../pages/page.css";
import AppLogo from "./app_logo"


export default function Footer(props) {
  var currentYear = new Date().getFullYear();
  return (
    <div className="row  " id="footer">
      <div className="col-sm-4  ">
         <AppLogo/>
        <div className="footer_text">
        We'll take care of everything, while you enjoy the moment
        </div>
        
      </div>
      <div className="col-sm-4">
        <h6 className="footer_title ">Ring</h6>
        <div className="footer_text">Telephone : (+27) 792-326-917</div>
        <h6 className="footer_title ">Email</h6>
        <div className="footer_text">Mail : info@sneventstore.com</div>
      </div>
      <div className="col-sm-4">
         <h6 className="footer_title ">ADDRESS</h6>
        <div className="footer_text">Albertyn Rd, Kyalamie Hills , Johannesburg</div>
        <div class="sub_copyright">
          &copy; 2020 Softin. All rights reserved | Designed by{" "}
          <a href="https://softin.vercel.app/" rel="nofollow">
            Softin
          </a>
        </div>
      </div>
    </div>
  );
}
