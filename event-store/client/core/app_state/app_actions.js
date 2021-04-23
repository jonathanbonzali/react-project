import {
  SET_USER,
  SIGN_OUT,
  CART_STATE_CHANGE,
  TOGGLE_MODAL,
} from "./app_action_type";

const setUser = (user) => ({ type: SET_USER});
const signOut = () => ({ type: SIGN_OUT });
const cartStateChange = () => ({ type: CART_STATE_CHANGE});
const toggleModal = (name) => ({
  type: TOGGLE_MODAL,
  name: name,
});

export default { setUser, signOut, cartStateChange , toggleModal };
