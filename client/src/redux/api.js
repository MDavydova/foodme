import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_MY_ENV
    : process.env.REACT_APP_API_URL;

const API = axios.create({ baseURL: API_URL });

export const createOrder = (orderData) => API.post("/order", orderData);
export const deleteOrder = (id) => API.delete(`/order/${id}`);
export const getOrderByKey = (data) => API.post("/order/getOrderByKey", data);
export const getShops = () =>
  axios.get("https://foodme-m75s.onrender.com/shops");
