import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalAmount: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.name === action.payload.name
      );

      const product = {
        name: action.payload.name,
        amount: 1,
        price: action.payload.priceForCart,
        shopName: action.payload.shopName,
      };
      /* eslint-disable */
      productIndex === -1
        ? state.products.push(product)
        : (state.products[productIndex].amount++,
          (state.products[productIndex].price += action.payload.priceForCart));
    },
    removeProduct(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.name === action.payload.name
      );

      state.products[productIndex].amount === 0
        ? state.products.splice(productIndex, 1)
        : (state.products[productIndex].amount--,
          (state.products[productIndex].price -= action.payload.priceForCart));
    },

    updateTotalAmount(state) {
      state.totalAmount = state.products
        .map((product) => product.amount)
        .reduce((a, b) => a + b);
    },
    /* eslint-enable */
    updateTotalCost(state, action) {
      state.totalCost = state.products
        .map((product) => product.price)
        .reduce((a, b) => a + b);
    },
    removeProductTotally(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.name === action.payload.name
      );

      state.totalAmount -= state.products[productIndex].amount;
      state.totalCost -= state.products[productIndex].price;
      state.products.splice(productIndex, 1);
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateTotalAmount,
  updateTotalCost,
  removeProductTotally,
} = cartSlice.actions;
export default cartSlice.reducer;
