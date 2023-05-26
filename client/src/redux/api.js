import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const createOrder = (orderData) => API.post("/order", orderData);
export const deleteOrder = (id) => API.delete(`/order/${id}`);
export const getOrderByEmail = (email) =>
  API.get("/order/getOrderByEmail", email);
export const getOrderById = (id) => API.get("/order/getOrderById", id);
export const getOrderByPhone = (phone) =>
  API.get("/order/getOrderByPhone", phone);

export const getShops = () => API.get("/shops");
