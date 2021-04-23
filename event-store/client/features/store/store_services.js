import queryString from "query-string";

const addProduct = async (userId, credentials, product) => {
  try {
    let response = await fetch("/api/store/" + userId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: product,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const getProduct = async (productId, signal) => {
  try {
    let response = await fetch("/api/store/" + productId, {
      method: "GET",
      signal: signal,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const getProductList = async (params, signal) => {
  const query = queryString.stringify(params);
  try {
    let response = await fetch("/api/store?" + query, {
      method: "GET",
      signal: signal,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const getCartItems = () => {
  if (sessionStorage.getItem("sn_cart-items"))
    return JSON.parse(sessionStorage.getItem("sn_cart-items"));
  return [];
};

const addToCart = (cartItem) => {
  let cartItems = getCartItems();
  sessionStorage.setItem(
    "sn_cart-items",
    JSON.stringify([...cartItems, cartItem])
  );
};

const removeFromCart = (itemId) => {
  let cartItems = getCartItems();
  const index = cartItems.findIndex((item) => item.itemId === itemId);
  if (index >= 0) {
    // item exist in cart, remove it...
    cartItems.splice(index, 1);
  }
  sessionStorage.setItem("sn_cart-items", JSON.stringify([...cartItems]));
};

const getCategories = () => {
  return [
    ,
    "Wedding",
    "Social Events",
    "Birthday Party",
    "Baby Shower",
    "Other Events",
  ];
};

export default {
  addProduct,
  getProductList,
  getProduct,
  getCartItems,
  removeFromCart,
  addToCart,
  getCategories,
};
