import React from "react";
import { useAppState, app } from "../../core/app_state/app_state_provider";
import storeService from "./store_services"

function cart(props) {


  const [{ cart }, dispatch] = useAppState();

  const getTotal = ()=> {

    
    if(cart.length){
      let total = cart.reduce((amount, item) => (parseFloat(item.price) * parseFloat(item.itemCount)) + amount, 0);
      return Number((total ).toFixed(2));  ;
    }

    return "0.00"
   
  }
  
  const removeFromCart = (itemId)=> {
      storeService.removeFromCart(itemId)
      dispatch(app.cartStateChange());
  }

  return (
    
    <div id="cart">
      <div className="d-flex flex-column wrap ">
        <div className="top">
          <div className="d-flex flex-row header ">
            <span className="text-dart mr-auto">Cart</span>
            <div onClick={props.closeDialog}>
              <svg
                height="15"
                width="20"
                class="Icon Icon--close"
                role="presentation"
                viewBox="0 0 16 14"
              >
                <path
                  d="M15 0L1 14m14 0L1 0"
                  stroke="currentColor"
                  fill="none"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <p className="ship_info py-2">
            Shipping & taxes calculated at checkout
          </p>
        </div>

        <div className="cart_item_wrap">
          {cart && cart.length ? (
            <div>
              {cart.map((item, index) => (
                <div className="cart_item d-flex flex-row">
                  <img src={"/api/store/images/" + item._id} />

                  <div className="d-flex flex-column pl-3">
                    <p className="name">{item.name}</p>
                    <p className="name price">{item.price} <span className="times">x</span> <span>  {item.itemCount}</span></p>
                    <div className="d-flex"></div>
                  </div>
                  <div onClick={()=>{removeFromCart(item.itemId)}} className="ml-auto"> 
                    <svg
                height="10"
                width="15"
                class="Icon Icon--close"
                role="presentation"
                viewBox="0 0 16 14"
              >
                <path
                  d="M15 0L1 14m14 0L1 0"
                  stroke="currentColor"
                  fill="none"
                  fill-rule="evenodd"
                ></path>
              </svg></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty text-center py-5">
              <span>Your cart is empty</span>
            </div>
          )}
        </div>

        <div className="bottom pt-3 ">
          <div
            className="d-flex flex-row mb-3 align-items-center 
             text-white  mx-3 pr-3 add_to_cart button--hyperion"
          >
            <div className="d-flex flex-fill justify-content-center flex-row">
              <div className="px-2">Checkout</div>
              <div className="price px-2">${getTotal()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default cart;
