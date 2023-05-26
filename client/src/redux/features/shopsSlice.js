import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getShops = createAsyncThunk("shops/getShops", async () => {
  const response = await api.getShops();
  return response;
});

const shopsSlice = createSlice({
  name: "shops",
  initialState: {
    loading: true,
    shops: [],
    chosenShop: "",
  },
  reducers: {
    defineShop(state, action) {
      state.shops.filter((shop) => shop.name === action.payload);
    },
  },
  extraReducers: {
    [getShops.pending]: (state, action) => {
      state.loading = true;
    },
    [getShops.fulfilled]: (state, action) => {
      state.loading = false;
      state.shops = action.payload.data;
    },
    [getShops.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { defineShop } = shopsSlice.actions;

export default shopsSlice.reducer;
