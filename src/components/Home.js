import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Home = ({ name }) => {
  return <div>HOME PAGE {name}</div>;
};

export default Home;
