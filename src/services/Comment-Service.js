// import axios from "axios";
import { privateAxios } from "./Helper";

export const createComment = async (comment, postId) => {
  return await privateAxios
    .post(`https://blog-shashi-production.up.railway.app/api/v1/post/${postId}/comments`, comment)
    .then((response) => response.data);
  //return response.data;
};

// export const createPost = async (postData) => {
//   return await privateAxios
//     .post(
//       `/user/${postData.userId}/category/${postData.categoryId}/posts`,
//       postData
//     )
//     .then((response) => response.data);
// };
