import { ADD_POST } from "../types/postTypes";

export const postAdd = (data) => {
  return {
    type: ADD_POST,
    data
  };
};
