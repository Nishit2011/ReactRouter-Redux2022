import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../action";

const SinglePost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const postById = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostById(postId));
  }, []);

  return (
    <div>
      <h3>SinglePost {postId}</h3>
      <Link to="/posts">Back to Posts</Link>
      {
        <>
          <h2>ID: {postById.singlePost.id}</h2>
          <h2>TITLE: {postById.singlePost.title}</h2>
          <h2>BODY: {postById.singlePost.body}</h2>
        </>
      }
    </div>
  );
};

export default SinglePost;
