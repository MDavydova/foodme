import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const createOrder = (orderData) => API.post("/order", orderData);
export const deleteOrder = (id) => API.delete(`/order/${id}`);
export const getOrderByKey = (data) => API.post("/order/getOrderByKey", data);
export const getShops = () => API.get("/shops");