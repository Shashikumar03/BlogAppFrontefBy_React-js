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
