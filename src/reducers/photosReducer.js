export const photosReducer = (state, action) => {
  switch (action.type) {
    case "posts":
      return { ...state, photosData: action.payload };
    default:
      return state;
  }
};
