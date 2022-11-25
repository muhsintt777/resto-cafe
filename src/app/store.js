import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data/dataSlice";
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    order: orderReducer,
  },
});
