import axios from "axios";

export const BASE_URL = "http://locahost:8080";

export const myAxios = axios.create({
  baseUrl: BASE_URL
});
