const initialState = {
  postsData: [],
  loading: true,
  error: "",
  singlePost: {},
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POSTS_REQUEST":
      return { ...state, loading: true };
    case "POSTS_SUCCESS":
      return { ...state, loading: false, postsData: action.payload };

    case "POSTS_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "POSTS_BY_ID_REQUEST":
      return { ...state, loading: true };
    case "POSTS_BY_ID_SUCCESS":
      return { ...state, loading: false, singlePost: action.payload };

    case "POSTS_BY_ID_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default postsReducer;
