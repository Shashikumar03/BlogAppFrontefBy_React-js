import axios from "axios";
import { privateAxios } from "./Helper";
export const loadAllCategories = async () => {
  const response = await axios.get("http://localhost:9292/api/v1/categories/");
  //console.log(response.data);

  return response.data;
};

export const createCategory = async (cat) => {
  console.log(cat);
  return await privateAxios
    .post("http://localhost:9292/api/v1/categories/", cat)
    .then((response) => response.data);
};
