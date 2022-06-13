const initialState = {
  postsData: [],
  loading: true,
  error: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POSTS_REQUEST":
      return { ...state, loading: true };
    case "POSTS_SUCCESS":
      return { ...state, loading: false, postsData: action.payload };

    case "POSTS_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default postsReducer;
