import React, { useState, useEffect } from "react";
import ProductItem from "./product_item";
import storeService from "./store_services";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

function store() {
  const [state, setState] = useState({
    products: [],
    isLoading: true,
    category: "All",
  });
  const groupProps = {
    appear: true,
    enter: true,
    exit: true,
  };

  let history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    query(state.category, signal);
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const query = (category, signal) => {
    setState({ ...state, products: [], isLoading: true });
    if (category) {
      storeService
        .getProductList({ category: category }, signal)
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setState({
              ...state,
              products: data,
              isLoading: false,
              category: category,
            });
          }
        });
    }
  };

  const show = (id) => history.push("/store/" + id);

  return (
    <div id="store" className="container-fluid p-0 border_all app_wrapper">
      <div className="row  ">
        <div className="col-sm-12 col-xl-11 mx-auto ">
          <div className="d-flex flex-column ">
            <SubMenu
              selected={state.category}
              onSelected={(name) => query(name)}
            />
            {state.isLoading ? (
              <div className="mx-auto text-center pt-5">
                <div class="sk-cube-grid">
                  <div class="sk-cube sk-cube1"></div>
                  <div class="sk-cube sk-cube2"></div>
                  <div class="sk-cube sk-cube3"></div>
                  <div class="sk-cube sk-cube4"></div>
                  <div class="sk-cube sk-cube5"></div>
                  <div class="sk-cube sk-cube6"></div>
                  <div class="sk-cube sk-cube7"></div>
                  <div class="sk-cube sk-cube8"></div>
                  <div class="sk-cube sk-cube9"></div>
                </div>
              </div>
            ) : state.products.length ? (
              <TransitionGroup className="row mx-5 pt-3 px-5" {...groupProps}>
                {state.products.map((item, index) => (
                  <div onClick={() => show(item._id)} className="col-sm-3 ">
                    <Fade key={index}>
                      <ProductItem ProductItem product={item} />
                    </Fade>
                  </div>
                ))}
              </TransitionGroup>
            ) : (
              <h1 className="app_h3_title mx-auto pt-5 mt-5">
                No Product to show
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const SubMenu = (props) => {
  const getCategories = () => ["All", ...storeService.getCategories()];
  return (
    <div
      id="menu_category"
      className="d-flex pt-3 pl-5 pb-2 px-3    justify-content-center"
    >
      {getCategories().map((item, index) => (
        <div
          onClick={() => props.onSelected(item)}
          key={index}
          className={
            "pt-1 pb-2 px-3 " + (item === props.selected && "selected ")
          }
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default store;
