import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

const SharedLayout = () => {
  return (
    <div>
      <StyledNavbar />

      <Outlet />
    </div>
  );
};

export default SharedLayout;
