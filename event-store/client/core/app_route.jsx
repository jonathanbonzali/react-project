import { Route, Switch, HashRouter } from "react-router-dom";
import React from "react";
import Home from "./home";
import Menu from "./menu/menu";
import Store from "../features/store/store";
import ProductDetails from "../features/store/product_details";
import AboutPage from "../pages/aboutus";
import ContactPage from "../pages/contact";
import ScrollTop from "../components/scrolltop";
import Footer from "../components/footer"
import SearchResult from "../features/store/searchResult"
import AppModal from "./app_modal"
export default function AppRoute() {
  return (
    <HashRouter>
      <div id="app_content_wrap">
        <Menu />
        <ScrollTop />
        <AppModal/>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/search" component={SearchResult}></Route>
          <Route path="/store/:productId" component={ProductDetails}></Route>
          <Route path="/store" component={Store}></Route>
          <Route path="/aboutus" component={AboutPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>

        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}
