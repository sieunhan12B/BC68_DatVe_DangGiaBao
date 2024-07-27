import { configureStore } from "@reduxjs/toolkit";
import chairSlice from "./chairSlice";

export const store = configureStore({
  reducer: {
    chairSlice,
  },
});
