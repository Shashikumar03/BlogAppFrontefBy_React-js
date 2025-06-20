import axios from "axios";
import { privateAxios } from "./Helper";
export const loadAllCategories = async () => {
  const response = await axios.get("https://blog-shashi-production.up.railway.app/api/v1/categories/");
  //console.log(response.data);

  return response.data;
};

export const createCategory = async (cat) => {
  console.log(cat);
  return await privateAxios
    .post("https://blog-shashi-production.up.railway.app/api/v1/categories/", cat)
    .then((response) => response.data);
};
