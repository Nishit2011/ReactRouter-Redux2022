import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
// import { photosReducer } from "./photosReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  //   photos: photosReducer,
});

export default rootReducer;
