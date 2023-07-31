import axios from "axios";

export const createComment = async (comment, postId) => {
  const response = await axios.post(
    `http://localhost:9292/api/v1/post/${postId}/comments`,
    comment
  );
  return response.data;
};
