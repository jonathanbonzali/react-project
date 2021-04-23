import React, { useState } from "react";
import authService from "./auth_service";

function Register(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    role: "user",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className="px-5 pb-4 pt-3 add_product_form">
      <div className="header text-left">
        <h4>Let's get Started</h4>
        <span>Sign in with your email address or mobile number.</span>
      </div>

      <input
        onChange={handleChange("email")}
        value={values["email"]}
        autocorrect="off"
        autoCapitalize="off"
        name="textInputValue"
        className="mt-3 text_input"
        placeholder="Email"
        aria-required="true"
        aria-invalid="true"
        aria-describedby="error-caption input-title"
        data-reactid="23"
      />

      <input
        onChange={handleChange("name")}
        value={values["name"]}
        autocorrect="off"
        autoCapitalize="off"
        name="textInputValue"
        className="text_input"
        placeholder="Username"
        aria-required="true"
        aria-invalid="true"
        aria-describedby="error-caption input-title"
        data-reactid="23"
      />
      <input
        onChange={handleChange("password")}
        value={values["password"]}
        type="password"
        autocorrect="off"
        autoCapitalize="off"
        name="textInputValue"
        className="text_input"
        placeholder="Password"
        aria-required="true"
        aria-invalid="true"
        aria-describedby="error-caption input-title"
        data-reactid="23"
      />

      <p className="text-danger errorMessage">{props.error}</p>
      <button
        onClick={props.signUp(values, () => {
          setValues({ email: "", password: "", name: "", role: "user" });
        })}
        className="light_button"
      >
        Create Account
      </button>
    </form>
  );
}

export default Register;
