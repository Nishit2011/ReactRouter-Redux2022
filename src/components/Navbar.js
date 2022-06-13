import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
const Navbar = () => {
  const navigate = useNavigate();
  const userVal = useContext(UserContext);

  const logoutFn = () => {
    console.log("logoutFn");
    console.log(userVal);

    navigate("/login");
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/login">Logout</Link>
      </nav>
    </div>
  );
};

export default Navbar;
