import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/photos">Photos</Link>
      </nav>
    </div>
  );
};

export default Navbar;
