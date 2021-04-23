import React from "react";
import "./page.css";
import { Link } from "react-router-dom";

export default function Aboutus(props) {
  return (
    <div className="About_us_wrapper   container-fluid p-0">
      <div className="row">
        <div className="About_top_image pt-5 ">
          <h1 className=" pt-5 mt-5 w-100 text-center ">About us</h1>
        </div>
      </div>

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
          <Link to="/store">
            <p className="">
              <span>OUR Store</span>
            </p>
          </Link>
        </div>
      </div>

      <div className="row page-border-margin sn_row py-5">
        <div className="col-sm-6 pl-5 pt-3">
          <p>SN EVENTS STORE</p>
          <h3>We love what we do</h3>

          <p className="pb-4">
            SN Events Store aspires to perfection and excellence. We believe
            that nothing is impossible when it comes to accomplish our ultimate
            goal, which is your satisfaction. Every event we create is a mission
            that we carry out with complicity, ingenuity and careful attention
            to details at every instant
          </p>
        </div>
        <div className="col-sm-6 pr-5 ">
          <div className="image_holder sn_about_img1"></div>
        </div>
      </div>
      <div className="row page-border-margin-exact sn_row my-5 pink-bg  py-5">
        <div className="col-sm-6 pl-5 ">
          <div className="image_holder sn_about_img2"></div>
        </div>
        <div className="col-sm-6 pl-5 pr-5 pt-3">
          <p>SN EVENTS STORE</p>
          <h3>Making plans together</h3>

          <p className="pb-4">
            We provide a tailored event management service that creates
            beautiful moments and memories that are forever etched in the heart
            of our clients. We have experience of outdoor marquee events as well
            as indoor activities. We combine your expectations and our know-how
            to create a unique moments. Together we can make your dream day come
            true. We take care of everything, while you enjoy the moment.{" "}
          </p>
        </div>
      </div>

      <div className="row page-border-margin sn_row py-5">
        <div className="col-sm-6 pl-5 pt-3">
          <p>SN EVENTS STORE</p>
          <h3>Upbeat personality</h3>

          <p className="pb-4">
            With every project, we create an atmosphere of joyful celebration
            and youthful zest for life. Designing a backdrop that would showcase
            our visual identity turned out to be more satisfying than we could
            have anticipated! With heart, skill and enthusiasm, we translate
            your unique events into an unforgettable moment of celebration.
            We’re also passionate about making your wedding planning a joyful
            experience . We are always eager to hear your opinion and share your
            experience.{" "}
          </p>
        </div>
        <div className="col-sm-6 pr-5 ">
          <div className="image_holder sn_about_img1"></div>
        </div>
      </div>

      <div className="row page-border-margin text-center  justify-content-center sn_row py-5">
        <p>Book Your Event</p>
        <h3 className="px-5">
          We would love to meet up and chat about how we can make your dream
          event happen!
        </h3>
        <p>We would love to hear from you</p> <br></br>
        <div className="col-sm-12 mb-3"></div>
        <Link to="/contact">
          <a href="#" className="btn-contact mb-5">
            Get in Touch
          </a>
        </Link>
      </div>
    </div>
  );
}
