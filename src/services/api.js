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

const createUsers = async (data) => {
  try {
    const response = await API.post("/users", data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getUserDetails = async (userId) => {
  try {
    const response = await API.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUser = async (userId) => {
  try {
    const response = await API.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const ApiService = {
  getSales,
  getUsers,
  getUserDetails,
  createUsers,
  deleteUser,
};
export default ApiService;
