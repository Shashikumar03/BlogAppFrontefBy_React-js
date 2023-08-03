import axios from "axios";
import { privateAxios } from "./Helper";

export const createPost = async (postData) => {
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
    `http://localhost:9292/api/v1/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`
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
// get post by category id

export const getPostByCategoryId = async (categoryId) => {
  const response = await axios.get(
    `http://localhost:9292/api/v1/category/${categoryId}/posts`
  );
  return response.data;
};
export const getPostByUser = async (userId) => {
  return await privateAxios
    .get(`/user/${userId}/posts`)
    .then((response) => response.data);
};

export const deletePostService = async (postId) => {
  console.log(postId + " yahi id wala delete hoga shashi smjha");
  return await privateAxios
    .delete(`/posts/${postId}`)
    .then((response) => response.data);
};

export const updatePostForm = async (post, postId) => {
  return await privateAxios
    .put(`http://localhost:9292/api/v1/posts/${postId}`, post)
    .then((response) => response.data);
};
