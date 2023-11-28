import axios from "axios";

const API = axios.create({
  baseURL: "https://delman-fe-api.fly.dev/",
});

const getSales = async () => {
  try {
    const response = await API.get("/");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export default getSales;
