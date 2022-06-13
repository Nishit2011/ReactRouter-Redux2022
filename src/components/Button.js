import React from "react";

const Button = ({ children, handleSubmit }) => {
  return (
    <div>
      <button onClick={(event) => handleSubmit(event)}>{children}</button>
    </div>
  );
};

export default Button;
