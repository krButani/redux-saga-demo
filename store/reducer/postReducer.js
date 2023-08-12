import * as types from "../types/postTypes";

const initState = {
  posts: [],
  error: false,
  messages: {}
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_POST_SUCCESS:
      state = {
        ...state,
        posts: action?.posts ? action?.posts : [],
        error: false,
        messages: {}
      };
      break;
    case types.POST_ERROR:
         state = {
           ...state,
           error: true,
           messages: action?.error
         };
      break;
    default:
      return state;
  }
  return state;
};

export default postReducer;
