import React, { useState, useEffect } from "react";
import { useAppState, app } from "./app_state/app_state_provider";
import AuthPage from "../features/authentication/auth";
import Cart from "../features/store/cart";
import AddProduct from "../features/store/addProduct";
import Search from "../features/store/search"
import { CSSTransition } from "react-transition-group";


function AppModal() {

  const [{ modalState }, dispatch] = useAppState();

  const toggleModal = (name) => () => {
    dispatch(app.toggleModal(name));
  };

  //closes modal when click outside 
  const handleClick = (e) => {
    if (e.target.id && e.target.id == "page_overlay") {
      toggleModal()();
    }
  };

  useEffect(() => {
    //todo : implement element ref
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);


  return (
    <div>

       <ModalTransition
        status={modalState.authPage}
        animationClass = "pop_modal"
      >
        <AuthPage closeDialog={toggleModal("authPage")} />
      </ModalTransition>


      <ModalTransition
        status={modalState.search}
        animationClass = "slide-from-top"
      >
        <Search closeDialog={toggleModal("search")} />
      </ModalTransition>


      <ModalTransition  
         status={modalState.cart} 
         animationClass = "slide-from-right">
        <Cart closeDialog={toggleModal("cart")} />
      </ModalTransition>
      
      <ModalTransition 
         status={modalState.addProduct} 
         animationClass = "slide-from-right"
         >
        <AddProduct closeDialog={toggleModal("addProduct")} />
      </ModalTransition>
    </div>
  );

}



// css animation : slide-from-right , slide-from-top , pop_modal
const ModalTransition = ({ status, animationClass, children }) => {

  return (
    <div>
      <CSSTransition
        appear={true}
        key="overlay"
        classNames="page_overlay"
        unmountOnExit
        timeout={300}
        in={status}
      >
        <div id="page_overlay" className="page_overlay"></div>
      </CSSTransition>

      <CSSTransition
        in={status}
        appear={true}
        unmountOnExit
        key={animationClass}
        timeout={300}
        classNames={animationClass}
      >
        <div className={animationClass}>
        {children}
        </div>
     
      </CSSTransition>
    </div>
  );
};



export default AppModal;
