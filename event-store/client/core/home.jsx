import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

function home() {
  return (
    <div className="container-fluid p-0 border_all app_wrapper ">
      <div className="d-flex w-100 m-0 flex-column row text-center text-white align-items-center home_top pl-5">
        <div className="text-center pt-5">
          <span>SN Events Store</span>
          <br></br>
          <span className="text_title_home pt-4">
            Private and Corporate Event Organiser
          </span>
        </div>
        <h2 className="text-center">
          {" "}
          Life is made of special moments. <br></br> Let's turn each into magic.
        </h2>
        <p className="text-center w-75 py-3 px-5">
          We are always eager to hear your opinion and share your experience.
          Your satisfaction means our success and we will work with you every
          step of the way to create an atmosphere of joyful celebration for your
          event.
        </p>
        <Link to="/aboutus">
          <a href="#" class="btn-contact ">
            READ MORE
          </a>
        </Link>
      </div>

      <div className="row page-border-margin sn_row py-5">
        <div
          className="col-sm-10
         row mx-auto"
        >
          <div className="col-sm-6 pl-5 pt-3">
            <p>Decoration Materials Rentals</p>
            <h3>Our Store</h3>

            <p className="pb-4">
              We offer you the liberty to rent and conceive your event yourself,
              thanks to our wide choice of products which will allow you to
              design and decorate any event of your choice.
            </p>
            <Link to="/store">
              <a href="#" class="btn-contact ">
                See our Products
              </a>
            </Link>
          </div>
          <div className="col-sm-6 pr-5 ">
            <div className="image_holder home_store_image"></div>
          </div>
        </div>
      </div>

      <div className="row  home_service_section py-5 mt-3">
        <div className="col-sm-6 py-0 pl-0 pr-5">
          <div className="service_image image_holder1"></div>
        </div>
        <div className="col-sm-5 pl-4 pr-5 service_item">
          <p>Making Plans Together</p>
          <h3>Corporate & Social Events </h3>

          <p className="pb-4 pr-3">
            SN Events Store specializes in the creation and development of
            numerous cooperate events, including Conference , Awards dinner ,
            Company celebration, Conventions, Fundraising Galas, Product
            Launches, Grand Openings and other social events. We will find for
            you atypical places and original concepts to flavour a unique
            experience.
          </p>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5 pl-5 pr-4 service_item">
          <p className="pl-3">Making Plans Together</p>
          <h3 className="pl-3">Luxury Wedding</h3>
          <p className="pb-4 pl-3">
            We’re passionate about making your wedding planning a joyful
            experience. We will design the most inspired backdrops, activities
            and arrangements to create a wedding day that captures the spirit of
            the love you share. Vibrant hues, organic textures and lush
            botanicals – all tie into the festive atmosphere, bringing the feel
            and allure of a modern and beautifully curated wedding tale.
          </p>
        </div>
        <div className="col-sm-6 py-0 pl-5 pr-0">
          <div className="service_image image_holder2"></div>
        </div>
        <div className="col-sm-6 py-0 pl-0 pr-5">
          <div className="service_image image_holder3"></div>
        </div>
        <div className="col-sm-5 pl-4 pr-5 service_item">
          <p>Making Plans Together</p>
          <h3>Birthday Party </h3>
          <p className="pb-4 pr-3">
            Birthdays are among the most cherished days every year. We are to
            make sure you have an unforgettable moment. We will find the most
            exciting ways and decorating ideas for you have a unique birthday
            party to celebrate with your friends and family. We are determined
            to make sure that your day is not only perfectly planned, but that
            it is aligned to whatever your heart desires.
          </p>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5 pl-5 pr-4 service_item">
          <p className="pl-3">Making Plans Together</p>
          <h3 className="pl-3">Baby Shower</h3>
          <p className="pb-4 pl-3">
            When you bring a new baby girl or boy into the world, it is such a
            wonderful moment. This is where Sn Events Store comes in. We will
            use our creativity and know-how to guarantee that your baby shower
            is a memorable moment filled with elegance, fun and love to
            celebrate the baby's coming. We'll customize your event in such a
            way that your celebration is unforgettable and one-of-a-kind.{" "}
          </p>
        </div>
        <div className="col-sm-6 py-0 pl-5 pr-0">
          <div className="service_image image_holder4"></div>
        </div>
        <div className="col-sm-6 py-0 pl-0 pr-5">
          <div className="service_image image_holder5"></div>
        </div>
        <div className="col-sm-5 pl-4 pr-5 service_item">
          <p>Making Plans Together</p>
          <h3>Other Events </h3>
          <p className="pb-4 pr-3">
            Every event is a unique moment that we conceive, plan, and design to
            produce incredible results. we are here to assist with every sort of
            event, like a children's party, a bridal shower. Candy Shop,
            Christmas, Summer Party, Afterwork amd plus several more of them,
          </p>
          <Link to="/contact">
            <a href="#" class="btn-contact ">
              Book Your Event
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default home;
