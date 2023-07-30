import axios from "axios";

export const loadAllCategories = async () => {
  const response = await axios.get("http://localhost:9292/api/v1/categories/");
  //console.log(response.data);

  return response.data;
};
