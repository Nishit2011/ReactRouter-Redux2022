import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../action";

const Posts = () => {
  const { postId, setPostId } = useState(0);

  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts.postsData);
  const dispatch = useDispatch();

  const userVal = useContext(UserContext);
  const handlerFn = (e) => {
    e.preventDefault();
    setPostId(e.target.value);
  };

  useEffect(() => {
    if (userVal.uname.length === 0) navigate("/login");
    dispatch(getPosts());
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
      {console.log(posts)}
      {posts && posts.length > 0 ? (
        posts.map((el) => (
          <div key={el.id}>
            <b>{el.id}.</b>
            {el.title}
          </div>
        ))
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
};

export default Posts;
