import axios from "axios";
// import { myAxios } from "./Helper";

export const signUp = async (user) => {
  const response = await axios.post(
    "http://localhost:8080/api/v1/auth/register",
    user
  );
  return response.data;
};
