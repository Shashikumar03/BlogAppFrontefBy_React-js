import axios from "axios";

export const loadAllCategories = async () => {
  const response = await axios.get("http://localhost:8080/api/categories/");

  return response.data;
};
