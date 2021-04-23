import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./core/app_route";
import { StateProvider } from "./core/app_state/app_state_provider";
import "./core/app.css";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <StateProvider>
          <AppRoutes></AppRoutes>
        </StateProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

// uses the higher order component (HOC) hot module from react-hot-loader to mark the root
//component as hot
export default hot(module)(App);
