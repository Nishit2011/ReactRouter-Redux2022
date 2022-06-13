import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { postId, setPostId } = useState(0);
  const navigate = useNavigate();
  const userVal = useContext(UserContext);
  const handlerFn = (e) => {
    e.preventDefault();
    setPostId(e.target.value);
  };

  useEffect(() => {
    if (userVal.uname.length === 0) navigate("/login");
  }, []);
  return (
    <div>
      <h2>Posts</h2>
      <Search
        placeholder="Enter postId"
        value={postId}
        handler={(e) => handlerFn(e)}
        name="post"
      />
    </div>
  );
};

export default Posts;
