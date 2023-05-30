import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getShops = createAsyncThunk("shops/getShops", async () => {
  const response = await api.getShops();
  return response;
});

const setChosenShop = (chosenShop, chosenShopLocation) => {
  localStorage.setItem("chosenShop", JSON.stringify(chosenShop));
  localStorage.setItem(
    "chosenShopLocation",
    JSON.stringify(chosenShopLocation)
  );
};

const setShops = (shops) => {
  localStorage.setItem("shops", JSON.stringify(shops));
};

const shops =
  localStorage.getItem("shops") !== null
    ? JSON.parse(localStorage.getItem("shops"))
    : [];

const chosenShop =
  localStorage.getItem("chosenShop") !== null
    ? JSON.parse(localStorage.getItem("chosenShop"))
    : "";

const chosenShopLocation =
  localStorage.getItem("chosenShopLocation") !== null
    ? JSON.parse(localStorage.getItem("chosenShopLocation"))
    : "";

const shopsSlice = createSlice({
  name: "shops",
  initialState: {
    loading: true,
    shops: shops,
    chosenShop: chosenShop,
    chosenShopLocation: chosenShopLocation,
  },
  reducers: {
    defineShop(state, action) {
      const shop = state.shops.find((shop) => shop.shopName === action.payload);
      state.chosenShop = shop.shopName;
      state.chosenShopLocation = shop.shopLocation;
      setChosenShop(state.chosenShop, state.chosenShopLocation);
    },
    undefineShop(state) {
      state.chosenShop = "";
      state.chosenShopLocation = "";
      setChosenShop(state.chosenShop, state.chosenShopLocation);
    },
  },
  extraReducers: {
    [getShops.pending]: (state, action) => {
      state.loading = true;
    },
    [getShops.fulfilled]: (state, action) => {
      state.loading = false;
      state.shops = action.payload.data;
      setShops(action.payload.data);
    },
    [getShops.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { defineShop, undefineShop } = shopsSlice.actions;

export default shopsSlice.reducer;
