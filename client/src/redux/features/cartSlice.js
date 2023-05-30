import { createSlice } from "@reduxjs/toolkit";

//localStorage.clear();

const products =
  localStorage.getItem("products") !== null
    ? JSON.parse(localStorage.getItem("products"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const totalCost =
  localStorage.getItem("totalCost") !== null
    ? JSON.parse(localStorage.getItem("totalCost"))
    : 0;

const setProductsFunc = (item) => {
  localStorage.setItem("products", JSON.stringify(item));
};

const setTotalAmount = (totalAmount) => {
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
};

const setTotalCost = (totalCost) => {
  localStorage.setItem("totalCost", JSON.stringify(totalCost));
};

const initialState = {
  products: products,
  totalAmount: totalAmount,
  totalCost: totalCost,
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

      setProductsFunc(state.products.map((item) => item));
    },
    removeProduct(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.name === action.payload.name
      );

      state.products[productIndex].amount === 0
        ? state.products.splice(productIndex, 1)
        : (state.products[productIndex].amount--,
          (state.products[productIndex].price -= action.payload.priceForCart));

      if (state.products[productIndex].amount >= 1) {
        setProductsFunc(state.products.map((item) => item));
      } else {
        setProductsFunc(
          state.products.filter((item) => state.products[productIndex] !== item)
        );
      }
    },

    updateTotalAmount(state) {
      state.totalAmount = state.products
        .map((product) => product.amount)
        .reduce((a, b) => a + b);

      setTotalAmount(state.totalAmount);
    },
    /* eslint-enable */
    updateTotalCost(state) {
      state.totalCost = state.products
        .map((product) => product.price)
        .reduce((a, b) => a + b);

      setTotalCost(state.totalCost);
    },
    removeProductTotally(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.name === action.payload.name
      );

      state.totalAmount -= state.products[productIndex].amount;
      state.totalCost -= state.products[productIndex].price;
      state.products.splice(productIndex, 1);
      setProductsFunc(state.products.map((item) => item));
      setTotalAmount(state.totalAmount);
      setTotalCost(state.totalCost);
    },
    removeProductsTotally(state) {
      state.products.splice(0);
      state.totalAmount = 0;
      state.totalCost = 0;

      setProductsFunc(state.products.map((item) => item));
      setTotalAmount(state.totalAmount);
      setTotalCost(state.totalCost);
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateTotalAmount,
  updateTotalCost,
  removeProductTotally,
  removeProductsTotally,
} = cartSlice.actions;
export default cartSlice.reducer;
