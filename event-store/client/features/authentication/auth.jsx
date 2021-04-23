import React, { useState, useEffect } from "react";
import Login from "./login";
import Register from "./register";
import AppLogo from "../../components/app_logo";
import { useAppState, app } from "./../../core/app_state/app_state_provider";
import authService from "./auth_service";

import "./auth.css";

function Auth(props) {
  const [{ user }, dispatch] = useAppState();
  const [state, setState] = useState({
    error: "",
    hasRegistered: false,
    isLoginScreen: true,
  });

  const toggleLoginRegister = () =>
    setState({
      error: "",
      hasRegistered: false,
      isLoginScreen: !state.isLoginScreen,
    });

  const login = (values) => (e) => {
    e.preventDefault();
    setState({ ...state, error: "" });
    authService
      .logInUser(values)
      .then((data) => {
        if (data.error) {
          setState({ ...state, error: data.error });
        } else {
          authService.authenticate(data, () => {
            //login in ans close dialog
            dispatch(app.setUser());
          });
        }
      })
      .catch((err) => setState({ ...state, error: err }));
  };

  const signUp = (values, clearFields) => (e) => {
    e.preventDefault();
    setState({ ...state, error: "" });
    authService
      .register(values)
      .then((data) => {
        if (data.error) {
          setState({ ...state, error: data.error });
        } else {
          clearFields();
          setState({ ...state, error: "", hasRegistered: true });
        }
      })
      .catch((err) => setError(err));
  };

  return (
    <div id="auth">
      <div className="content">
        <div
          onClick={props.closeDialog}
          className="cancel_button cancel_button_image pr-2 pt-2 pb-2"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="5" width="35" height="35" rx="17.5" fill="#F3F0EF" />
            <path
              d="M12.4541 30.8388L30.1317 13.1612M12.4541 13.1612L30.1317 30.8388L12.4541 13.1612Z"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="d-flex justify-content-center">
          <AppLogo />
        </div>
        <div className="px-5 text-center">
          {state.hasRegistered && (
            <p>
              {" "}
              <span>Account created Successfully </span>
              <span
                className="text-success text_underline "
                onClick={toggleLoginRegister}
              >
                Sign In now
              </span>
            </p>
          )}
        </div>

        {state.isLoginScreen ? (
          <div>
            <Login error={state.error} login={login} />
            <div className="footer text-center">
              <p>
                New to SN Event Store?
                <span onClick={toggleLoginRegister}>Create an account</span>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <Register error={state.error} signUp={signUp} />
            <div className="footer text-center">
              <p>
                {" "}
                Already use SN Event Store?{" "}
                <span onClick={toggleLoginRegister}>Sign in </span>{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
