import axios from "axios";
// import { myAxios } from "./Helper";

export const signUp = async (user) => {
  const response = await axios.post(
    "https://blog-shashi-production.up.railway.app/api/v1/auth/register",
    user
  );
  return response.data;
};
export const loginUser = async (loginDetail) => {
  console.log("login details", loginDetail)
  const response = await axios.post(
    "https://blog-shashi-production.up.railway.app/api/v1/auth/login",
    loginDetail
  );
  console.log(" log response :", response.data)

  return response.data;
};
