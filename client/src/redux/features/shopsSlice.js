import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getShops = createAsyncThunk(
  "shops/getShops",
  async ({ rejectWithValue }) => {
    try {
      const response = await api.getShops();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const shopsSlice = createSlice({
  name: "shops",
  initialState: {
    loading: true,
    error: "",
    shops: [],
  },
  reducers: {},
  extraReducers: {
    [getShops.pending]: (state, action) => {
      state.loading = false;
    },
    [getShops.fulfilled]: (state, action) => {
      state.loading = false;
      state.shops = [action.payload];
    },
    [getShops.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default shopsSlice.reducer;
