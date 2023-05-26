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
      const shop = state.shops.find((shop) => shop.shopName === action.payload);
      state.chosenShop = shop.shopName;
    },
    undefineShop(state) {
      state.chosenShop = "";
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

export const { defineShop, undefineShop } = shopsSlice.actions;

export default shopsSlice.reducer;
