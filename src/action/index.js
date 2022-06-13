import axios from "axios";

const getPostsRequest = () => {
  return {
    type: "POSTS",
  };
};

const getPostsSuccess = (posts) => {
  //console.log(posts);
  return {
    type: "POSTS_SUCCESS",
    payload: posts,
  };
};

const getPostsError = (err) => {
  return {
    type: "POSTS_ERROR",
    payload: err,
  };
};

const getPostByIdRequest = () => {
  return {
    type: "POSTS_BY_ID",
  };
};

const getPostByIdSuccess = (posts) => {
  //console.log(posts);
  return {
    type: "POSTS_BY_ID_SUCCESS",
    payload: posts,
  };
};

const getPostByIdError = (err) => {
  return {
    type: "POSTS_BY_ID_ERROR",
    payload: err,
  };
};

export const getPosts = () => async (dispatch) => {
  console.log("getPosts");
  dispatch(getPostsRequest);
  await axios
    .get("https://jsonplaceholder.typicode.com/posts?limit=10")
    .then((res) => {
      const posts = res.data;

      dispatch(getPostsSuccess(posts));
    })
    .catch((error) => {
      const err = error.message;
      dispatch(getPostsError(err));
    });
};

export const getPostById = (postId) => async (dispatch) => {
  console.log("getPostById");
  dispatch(getPostByIdRequest);
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => {
      const posts = res.data;

      dispatch(getPostByIdSuccess(posts));
    })
    .catch((error) => {
      const err = error.message;
      dispatch(getPostByIdError(err));
    });
};
