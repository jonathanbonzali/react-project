import React, { useState } from "react";
import "./product.css";

function product_item(props) {
  return (
    <div className="d-flex flex-xl-column product_item mb-5 ">
      <img
        className="photo ml-auto"
        src={"/api/store/images/" + props.product._id}
      />

      <div className="d-flex flex-column text-center  pt-3 pr-2">
        <h2 className="name text_truncate2">{props.product.name}</h2>
        <p className="price  align-items-end mt-auto">${props.product.price}</p>
      </div>
    </div>
  );
}

export default product_item;
