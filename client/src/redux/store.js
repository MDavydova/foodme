import { configureStore } from "@reduxjs/toolkit";

import OrderReducer from "./features/orderSlice";
import ShopsReducer from "./features/shopsSlice";

export default configureStore({
  reducer: {
    shops: ShopsReducer,
  },
});
