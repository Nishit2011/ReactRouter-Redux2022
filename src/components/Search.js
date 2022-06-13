import React from "react";
import Input from "./Input";

const Search = ({ type, placeholder, postId, handler, name }) => {
  return (
    <div>
      <Input
        type={type}
        placeholder={placeholder}
        value={postId}
        onChange={handler}
        name={name}
      />
    </div>
  );
};

export default Search;
