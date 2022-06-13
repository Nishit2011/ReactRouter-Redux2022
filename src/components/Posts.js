import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../action";
import { Link } from "react-router-dom";

const Posts = () => {
  const { postId, setPostId } = useState(0);

  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts);
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
      {!posts.loading ? (
        posts.postsData.map((el) => (
          <div key={el.id}>
            <b>{el.id}.</b>
            <Link to={`/posts/${el.id}/`}> {el.title}</Link>
          </div>
        ))
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
};

export default Posts;
