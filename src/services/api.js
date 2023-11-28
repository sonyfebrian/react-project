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

const getUsers = async () => {
  try {
    const response = await API.get("/users");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const ApiService = {
  getSales,
  getUsers,
};
export default ApiService;
