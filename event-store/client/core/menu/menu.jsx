import React, { useState } from "react";
import "./menu.css";
import AppLogo from "../../components/app_logo";
import { Link, useHistory } from "react-router-dom";
import { useAppState, app } from "../../core/app_state/app_state_provider";

const Menu = (props) => {

  const [{ user, cart }, dispatch] = useAppState();
  const signOut = (e) => dispatch(app.signOut());

  const login_SignUpButtons = () => {
    return (
      <div
        onClick={() => dispatch(app.toggleModal("authPage"))}
        className="menu_item pt-1"
      >
        <span>Sign in</span>
      </div>
    );
  };

  const UserProfileUi = () => {
    return <div className="user_profile ml-2"></div>;
  };

  return (
    <div className="d-flex  pb-2 px-3   app_menu ">


      <div className="pl-3  ">
        <AppLogo />
      </div>


      <div className="mx-auto d-flex pt-3">
        <Link to="/">
          <div className="menu_item">
            <span>Home</span>
          </div>
        </Link>
        <Link to="/aboutus">
          <div className="menu_item">
            <span>About us</span>
          </div>
        </Link>

        <Link to="/store">
          <div className="menu_item">
            <span>Store</span>
          </div>
        </Link>
        <Link to="/contact">
          <div className="menu_item">
            <span>Contact us</span>
          </div>
        </Link>
      </div>



      <div className="d-flex pt-3">

        <div   className="d-flex  pt-1">
          <div onClick={() => dispatch(app.toggleModal("search"))} className="px-2 ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 14.5l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z"
                stroke="currentColor"
              ></path>
            </svg>
          </div>

          {
            user && <div onClick={() => dispatch(app.toggleModal("addProduct"))} className="px-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 .5H1.5a1 1 0 00-1 1V4M6 .5h3m2 0h2.5a1 1 0 011 1V4M.5 6v3m14-3v3m-14 2v2.5a1 1 0 001 1H4M14.5 11v2.5a1 1 0 01-1 1H11M7.5 4v7M4 7.5h7m-5 7h3"
                stroke="currentColor"
              ></path>
            </svg>
          </div>
          }
          
        </div>



        <div
          onClick={() => dispatch(app.toggleModal("cart"))}
          className="menu_button_signup"
        >
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
          >
            <path
              d="M.5.5l.6 2m0 0l2.4 8h11v-6a2 2 0 00-2-2H1.1zm11.4 12a1 1 0 110-2 1 1 0 010 2zm-8-1a1 1 0 112 0 1 1 0 01-2 0z"
              stroke="#ffffff"
            ></path>
          </svg>
          <span className="pl-2">Cart {cart.length}</span>
        </div>

        {
        
        user ? 
        <div className="d-flex"> {
          UserProfileUi()} 
         <div onClick={signOut} className="px-3 pt-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 7.5l-3 3.25m3-3.25l-3-3m3 3H4m4 6H1.5v-12H8"
                stroke="currentColor"
              ></path>
            </svg>
          </div>
        
        </div> : login_SignUpButtons()}

       

       

       
      </div>
    </div>
  );
};

export default Menu;
