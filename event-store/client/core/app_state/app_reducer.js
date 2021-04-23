import {
  SET_USER,
  SIGN_OUT,
  CART_STATE_CHANGE ,
  TOGGLE_MODAL,
} from "./app_action_type";

import authServices from "../../features/authentication/auth_service";
import storeService from "../../features/store/store_services"

export const initialState = {
  cart : storeService.getCartItems() ,
  modalState: {
    search : false ,
    cart: false,
    addProduct: false,
    authPage: false,
  },
  user : authServices.isAuthenticated()
};

function reducer(state, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        modalState : initialState.modalState,
        user: authServices.isAuthenticated()
      };
    }

    //if action.name is not defined => set initial state
    case TOGGLE_MODAL: {
      console.log(action.name);
      return {
        ...state,
        modalState: action.name
          ? {
              ...state.modalState,
              [action.name]: !state.modalState[action.name],
              props: action.props,
            }
          : initialState.modalState,
      };
    }
    case SIGN_OUT: {
      authServices.signout();
      return {
        ...state,
        user : authServices.isAuthenticated()
      };
    }
    case CART_STATE_CHANGE:
      // update state  when an item is added or removed from the cart
      return {
        ...state,
        cart: storeService.getCartItems(),
      };

    default:
      return state;
  }
}

export default reducer;
