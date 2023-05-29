import axios from "axios";

export const createOrder = (orderData) => axios.post("/order", orderData);
export const deleteOrder = (id) => axios.delete(`/order/${id}`);
export const getOrderByKey = (data) => axios.post("/order/getOrderByKey", data);
export const getShops = () => axios.get("/shops");
