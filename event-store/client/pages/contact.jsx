import React from "react";
import "./page.css";
import { Link } from "react-router-dom";

export default function Contact(props) {
  return (
    <div className="container-fluid  p-0">
      <div className="link-left">
        <div className="link_outer">
          <Link to="/aboutus">
            <p className="">
              <span>About us</span>
            </p>
          </Link>
        </div>
      </div>

      <div className="link_right">
        <div className="link_outer">
          <Link to="/Location-of-decorative-materials">
            <p className="">
              <span>OUR Store</span>
            </p>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="contact_top_image pt-5 ">
          <h1 className=" pt-5 mt-5 w-100 text-center ">Contact us</h1>
        </div>
      </div>

      <div className="row page-border-margin mx-lg-5 px-xl-5 sn_row py-5">
        <div className="col-sm-6 pl-5 pt-3">
          <p>SN EVENTS STORE</p>
          <h3>Visit us</h3>

          <p className="pb-4">
            We will help you from the initial planning of your event up to the
            final stage. We are here to save you 95% of your time to create a
            special moment where all conditions are in place for you to enjoy
            <br></br>
            <br></br>
            <b className="text-dark"> Mail : info@sneventstore.com </b>
            <br></br>
            <b className="text-dark">Telephone : (+27) 792-326-917</b>
            <br></br>
            <b className="text-dark">
              Address: Albertyn Rd, Kyalamie Hills , Johannesburg
            </b>
          </p>
        </div>
        <div className="col-sm-6 pr-5 ">
          <div className="image_holder sn_about_img1"></div>
        </div>
      </div>

      <div className="row  page-border-margin p-5 justify-content-center mx-lg-5  contact_form py-5 text-center">
        <p className="w-100">Ready to Get in Touch</p>
        <h3>Contact us</h3>
        <p className="page-border-margin w-100 mb-5"></p>
        <div className="col-sm-6">
          <input
            type="text"
            name="your-name"
            value=""
            size="40"
            class=""
            aria-required="true"
            aria-invalid="false"
            placeholder="Name"
          />
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            name="your-name"
            value=""
            size="40"
            class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
            aria-required="true"
            aria-invalid="false"
            placeholder="Email/Phone number"
          />
        </div>
        <div className="col-sm-12">
          <textarea
            name="your-message"
            cols="40"
            rows="5"
            class="wpcf7-form-control wpcf7-textarea"
            aria-invalid="false"
            placeholder="Message"
          ></textarea>
        </div>
        <button onClick={(e)=> e.preventDefault()}>
          <span>Get in Touch</span>
        </button>
      </div>
    </div>
  );
}
