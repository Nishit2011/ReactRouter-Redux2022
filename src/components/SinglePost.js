import React from "react";
import { Link, useParams } from "react-router-dom";

const SinglePost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h3>SinglePost {postId}</h3>
      <Link to="/posts">Back to Posts</Link>
    </div>
  );
};

export default SinglePost;
