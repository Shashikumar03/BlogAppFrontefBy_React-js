import axios from "axios";
import { privateAxios } from "./Helper";

export const createPost = async (postData) => {
  console.log(postData);

  return await privateAxios
    .post(
      `/user/${postData.userId}/category/${postData.categoryId}/posts`,
      postData
    )
    .then((response) => response.data);
};
// http://localhost:9292/api/v1/user/1/category/1/posts

export const getAllPost = async (pageNumber, pageSize) => {
  const response = await axios.get(
    `http://localhost:9292/api/v1/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=asc`
  );
  return response.data;
};
// load post by id
export const getPostById = async (postId) => {
  const response = await axios.get(
    `http://localhost:9292/api/v1/posts/${postId}`
  );
  console.log(
    "------------------------------------------------------------------"
  );
  return response.data;
};
