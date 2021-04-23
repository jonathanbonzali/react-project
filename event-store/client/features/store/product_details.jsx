import React, { useState, useEffect } from "react";
import { useAppState, app } from "../../core/app_state/app_state_provider";
import storeService from "./store_services";
function ProductDetails({ match }) {
  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [count, setCount] = useState(1);
  const [{ cart }, dispatch] = useAppState();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    storeService.getProduct(match.params.productId, signal).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, [match.params.productId]);

  const decrement = () => {
    if (count == 1) return;
    setCount(count - 1);
  };

  const total = () => {
    let price = parseFloat(product.price);
    return Number((count * price).toFixed(2));
  };

  const addToCart = () => {
    const cartItem = {
      ...product,
      itemCount: count,
      itemId: Date.now(),
    };
    storeService.addToCart(cartItem);
    dispatch(app.cartStateChange());
    dispatch(app.toggleModal("cart"));
  };
  const imageUrl = product._id
    ? `/api/store/images/${product._id}`
    : `${new Date().getTime()}`;

  return (
    <div id="product_details" className="container-fluid mb-5">
      <div className="row pt-4">
        <div className="col-sm-1"></div>
        <div className="col-sm-6">
          {" "}
          <img src={imageUrl} />
        </div>
        <div className="col-sm-4">
          <h2 className="px-3 pt-3 "> {product.name}</h2>

          <div
            className="d-flex flex-row align-items-center 
            flex-fill text-white  m-3 pr-3"
          >
            <div className="ic p-2">
              <button onClick={decrement} className="px-3">
                -
              </button>
              <button className="px-3 count">{count}</button>
              <button onClick={() => setCount(count + 1)} className="px-3">
                +
              </button>
            </div>
          </div>

          <div
            onClick={addToCart}
            className="d-flex flex-row mb-3 align-items-center 
             text-white add_to_cart mx-3 pr-3 button--hyperion"
          >
            <div className="d-flex flex-fill flex-row">
              <div className="mx-auto">Add to Cart</div>
              <div className="price">${total()}</div>
            </div>
          </div>

          <p className="px-3 description">{product.description}</p>
        </div>
        <div className="col-sm-1"></div>
      </div>

      <div className="content">
        <div className="scroll_content"></div>
      </div>
    </div>
  );
}

export default ProductDetails;
