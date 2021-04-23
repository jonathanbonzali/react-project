import React, { useState, useEffect } from "react";
import queryString from "query-string";
import storeService from "./store_services";
import { Link } from "react-router-dom";

function searchResult(props) {
  const [values, setValues] = useState({
    searched: "",
    products: [],
    search: "",
  });

  const onValueChange = (e) => {
    setValues({ ...values, search: e.target.value.trimStart() });
  };

  const getUrlParams = () => queryString.parse(props.location.search).query;

  useEffect(() => {
    query(getUrlParams());
  }, [props.location.search]);

  const query = (search) => {
    console.log(search);
    if (search) {
      storeService.getProductList({ search: search }).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues({
            ...values,
            products: data,
            searched: search,
            search: search,
          });
        }
      });
    }
  };

  return (
    <div
      id="search_result"
      className="container-fluid text-center pt-4 d-flex flex-column"
    >
      <h3 className="app_truncate1 app_h3_title">
        {" "}
        {values.products.length ? values.products.length : "No"} Result for "
        {values.searched}"{" "}
      </h3>
      <div className="app_b_button pb-5 mb-5">
        <div class="w-50 mx-auto  mt-3">
          <div class="search_wrap">
            <input
              type="text"
              value={values.search}
              onChange={onValueChange}
              class="searchTerm"
              placeholder="Search for product"
            />
            <button
              onClick={() => query(values.search)}
              class="searchButton pb-2"
            >
              <div
                className={values.search.length ? "app_fadeIn" : "app_fadeOut"}
              >
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
            </button>
          </div>
        </div>
      </div>
      <div className="w-60 mx-auto">
        {values.products.map((item, index) => (
          <Link key={index} to={"/store/" + item._id}>
            <div className="d-flex flex-row mb-4 pb-4 app_b_button result_item">
              <img className=" mr-5" src={"/api/store/images/" + item._id} />
              <h2 className="app_truncate1  pt-3 mr-auto my-auto ">
                {" "}
                {item.name}
              </h2>
              <p className="price pt-2  pl-5  my-auto">${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default searchResult;
