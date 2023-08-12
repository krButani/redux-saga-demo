import axios from "axios";
import { base_url, headers } from "./config";

export function addPost(postData) {
  return axios.post(`${base_url}/posts`, postData, { headers });
}