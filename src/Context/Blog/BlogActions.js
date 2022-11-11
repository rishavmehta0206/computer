export const CreateBlog = (dispatch, blog) => {
  dispatch({ type: "START" });
  try {
    dispatch({ type: "ADD_BLOG", payload: blog });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.message });
  }
};
