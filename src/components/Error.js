import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h3>Error</h3>
      <header>Page Not Found</header>
      <Link to="/">back to home page</Link>
    </div>
  );
};

export default Error;
