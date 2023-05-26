import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await api.createOrder(orderData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "order/deleteOrder",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await api.deleteOrder(id);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getOrderByPhone = createAsyncThunk(
  "order/getOrderByPhone",
  async ({ phone }, { rejectWithValue }) => {
    try {
      const response = await api.getOrderByPhone(phone);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getOrderByEmail = createAsyncThunk(
  "order/getOrderByEmail",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await api.getOrderByEmail(email);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getOrderById = createAsyncThunk(
  "order/getOrderById",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await api.getOrderById(id);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {},
  reducers: {
    
  }
});
