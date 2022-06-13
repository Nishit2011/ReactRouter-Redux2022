import React from "react";
import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/photos">Photos</NavLink>
      </nav>
    </div>
  );
};

export default StyledNavbar;
