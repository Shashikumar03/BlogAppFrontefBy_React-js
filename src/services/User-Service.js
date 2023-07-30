import axios from "axios";
// import { myAxios } from "./Helper";

export const signUp = async (user) => {
  const response = await axios.post(
    "http://localhost:9292/api/v1/auth/register",
    user
  );
  return response.data;
};
export const loginUser = async (loginDetail) => {
  const response = await axios.post(
    "http://localhost:9292/api/v1/auth/login",
    loginDetail
  );

  return response.data;
};
