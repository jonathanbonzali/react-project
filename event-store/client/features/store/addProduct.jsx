import React, { useState } from "react";

import "./product.css";
import authService from "../authentication/auth_service";
import storeService from "./store_services";

function addProduct(props) {
  const defaultSelectValue = "Select Category";
  const [image, setImage] = React.useState("");
  const [values, setValues] = useState({
    name: "",
    message: "",
    description: "",
    image: "",
    category: defaultSelectValue,
    total: "",
    price: "",
    error: "",
  });

  const handleChange = (name) => (event) => {
    let value;
    if (name === "image") {
      value = event.target.files[0];
      uploadImage(value);
    } else {
      value = event.target.value;
    }
    setValues({ ...values, [name]: value, error: "" });
  };

  const uploadImage = (imageFile) => {
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      setImage(e.target.result);
    });
    reader.readAsDataURL(imageFile);
  };

  const jwt = authService.isAuthenticated();

  const addProduct = (e) => {
    if (!values.image) {
      if (values.category === defaultSelectValue) {
        setValues({ ...values, error: "Please select an image" });
        return;
      }
    }

    if (values.category === defaultSelectValue) {
      setValues({ ...values, error: "Please select a category" });
      return;
    }

    e.preventDefault();
    let productData = new FormData();
    values.name && productData.append("name", values.name);
    values.description && productData.append("description", values.description);
    values.image && productData.append("image", values.image);
    values.category && productData.append("category", values.category);
    values.total && productData.append("total", values.total);
    values.price && productData.append("price", values.price);

    storeService
      .addProduct(jwt.user._id, { t: jwt.token }, productData)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, message: "" });
        } else {
          setValues({
            ...values,
            error: "",
            message: "Product added Successfully",
            name: "",
            description: "",
            image: "",
            category: defaultSelectValue,
            total: "",
            price: "",
            error: "",
          });
          setImage("");
        }
      });
  };

  const addImageUi = () => (
    <div className="d-flex flex-column">
      {image && <img className="mx-auto" src={image} alt="" />}
      <input
        accept="image/*"
        onChange={handleChange("image")}
        className="add_image_button"
        id="add_image_button"
        type="file"
      />

      <div className="add_image_box text-center mb-3 p-3">
        <label htmlFor="add_image_button">
          <svg
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.289062 3.10278C0.289063 2.31393 0.621031 1.55739 1.21194 0.999588C1.80285 0.441787 2.60429 0.128418 3.43996 0.128418L8.69145 0.128418V2.11132H3.43996C3.1614 2.11132 2.89425 2.21578 2.69728 2.40171C2.50032 2.58765 2.38966 2.83983 2.38966 3.10278V8.06004H0.289062V3.10278ZM19.1944 2.11132H12.8926V0.128418H19.1944V2.11132ZM28.6471 2.11132H23.3956V0.128418H28.6471C29.4828 0.128418 30.2842 0.441787 30.8751 0.999588C31.466 1.55739 31.798 2.31393 31.798 3.10278V8.06004H29.6974V3.10278C29.6974 2.83983 29.5868 2.58765 29.3898 2.40171C29.1928 2.21578 28.9257 2.11132 28.6471 2.11132V2.11132ZM14.9932 14.0088V8.06004H17.0938V14.0088H23.3956V15.9917H17.0938V21.9404H14.9932V15.9917H8.69145V14.0088H14.9932ZM0.289062 17.9746V12.0259H2.38966V17.9746H0.289062ZM29.6974 17.9746V12.0259H31.798V17.9746H29.6974ZM0.289062 26.8976V21.9404H2.38966V26.8976C2.38966 27.1606 2.50032 27.4128 2.69728 27.5987C2.89425 27.7846 3.1614 27.8891 3.43996 27.8891H8.69145V29.872H3.43996C2.60429 29.872 1.80285 29.5586 1.21194 29.0008C0.621031 28.443 0.289063 27.6865 0.289063 26.8976H0.289062ZM29.6974 26.8976V21.9404H31.798V26.8976C31.798 27.6865 31.466 28.443 30.8751 29.0008C30.2842 29.5586 29.4828 29.872 28.6471 29.872H23.3956V27.8891H28.6471C28.9257 27.8891 29.1928 27.7846 29.3898 27.5987C29.5868 27.4128 29.6974 27.1606 29.6974 26.8976ZM19.1944 29.872H12.8926V27.8891H19.1944V29.872Z"
              fill="#6F6F6F"
            />
          </svg>
          <span className="ml-2">{image ? "Change image" : "Add Image"}</span>
        </label>
      </div>
    </div>
  );

  return (
    <div id="add_product" className="d-flex flex-column wrap ">
      <div className="top">
        <div className="d-flex flex-row header ">
          <span className="text-dart mr-auto">Add New Product</span>
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
      </div>
      <div className="app_hide_scrollbar content p-2">
        <form className="p-3 add_product_form">
          {addImageUi()}
          <input
            value={values.name}
            onChange={handleChange("name")}
            autocorrect="off"
            autoCapitalize="off"
            name="textInputValue"
            className="text_input"
            placeholder="Name"
            aria-required="true"
            aria-invalid="true"
            aria-describedby="error-caption input-title"
            data-reactid="23"
          />

          <input
            autocorrect="off"
            autoCapitalize="off"
            name="textInputValue"
            value={values.price}
            onChange={handleChange("price")}
            className="text_input"
            placeholder="Price"
            aria-required="true"
            aria-invalid="true"
            aria-describedby="error-caption input-title"
            data-reactid="23"
          />
          <select
            className="app_text_input"
            value={values.category}
            onChange={handleChange("category")}
          >
            <option value={defaultSelectValue}> {defaultSelectValue}</option>
            {storeService.getCategories().map((item, index) => (
              <option key={index} value={item}>
                {" "}
                {item}
              </option>
            ))}
          </select>

          <input
            id="useridInput"
            autocorrect="off"
            autoCapitalize="off"
            name="textInputValue"
            value={values.total}
            onChange={handleChange("total")}
            className="text_input"
            placeholder="Total rentable quantity"
            aria-required="true"
            aria-invalid="true"
            aria-describedby="error-caption input-title"
            data-reactid="23"
          />

          <textarea
            id="multiline-flexible"
            label="Description"
            multiline
            rows="2"
            value={values.description}
            onChange={handleChange("description")}
            className="text_input"
            placeholder="Price"
            aria-required="true"
            aria-invalid="true"
            aria-describedby="error-caption input-title"
            data-reactid="23"
          />
          <p>
            <span className="text-success text_underline ">
              {values.message}
            </span>
          </p>
          <p className="text-danger errorMessage">{values.error}</p>
          <button onClick={addProduct} className="light_button">
            Add New Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default addProduct;
