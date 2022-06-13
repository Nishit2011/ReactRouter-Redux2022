import React from "react";

const Input = ({ type, value, placeholder, name, handler }) => {
  return (
    <div>
      <input
        type={type}
        onChange={(e) => handler(e)}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
