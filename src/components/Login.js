import React, { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Login = ({ setUser }) => {
  const [loginDetails, setLoginDetails] = useState({ uname: "", pswd: "" });
  const navigate = useNavigate();
  const handlerFn = (e) => {
    e.preventDefault();
    console.log("function called");
    const { name, value } = e.target;

    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const submitFn = (e) => {
    e.preventDefault();
    console.log("btn clicked");
    const { uname, pswd } = loginDetails;
    console.log(uname, pswd);
    if (!uname || !pswd) return;
    setUser(loginDetails);
    navigate("/");
  };

  return (
    <div>
      <h4>Sign In</h4>

      <Input
        type="text"
        name="uname"
        placeholder="Enter Username"
        handler={(e) => handlerFn(e)}
      />
      <Input
        type="password"
        name="pswd"
        placeholder="Enter Password"
        handler={(e) => handlerFn(e)}
      />
      <Button handleSubmit={(e) => submitFn(e)}>Login</Button>
    </div>
  );
};

export default Login;
