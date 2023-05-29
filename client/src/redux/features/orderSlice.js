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

export const getOrderByKey = createAsyncThunk(
  "order/getOrderByKey",
  async (obj, { rejectWithValue }) => {
    try {
      const response = await api.getOrderByKey(obj);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: {},
    error: "",
  },
  reducers: {
    makeOrderEmpty(state) {
      state.order = {};
    },
  },
  extraReducers: {
    [getOrderByKey.fulfilled]: (state, action) => {
      state.order = action.payload;
      state.error = "";
    },
    [getOrderByKey.rejected]: (state, action) => {
      state.order = {};
      state.error = action.payload.message;
    },
  },
});

export const { makeOrderEmpty } = orderSlice.actions;

export default orderSlice.reducer;
