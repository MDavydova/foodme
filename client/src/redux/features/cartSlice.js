import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.name === action.payload
      );

      const product = {
        name: action.payload,
        amount: 0,
      };

      productIndex === -1
        ? state.products.push(product)
        : state.products[productIndex].amount++;
    },
    removeProduct(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.name === action.payload
      );
      state.products[productIndex].amount--;
    },
    updateTotal(state) {
      const totalAmount = state.products.reduce((acc, product) => {
        return acc.amount + product.amount;
      });
      state.total = totalAmount.amount + 1;
    },
  },
});

export const { addProduct, removeProduct, updateTotal } = cartSlice.actions;
export default cartSlice.reducer;
