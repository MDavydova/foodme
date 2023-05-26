import { configureStore } from "@reduxjs/toolkit";

import OrderReducer from "./features/orderSlice";
import ShopsReducer from "./features/shopsSlice";
import CartReducer from "./features/cartSlice";

export default configureStore({
  reducer: {
    shops: ShopsReducer,
    cart: CartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
