import { configureStore } from "@reduxjs/toolkit";
import SalesSlice from "./slices/SalesSlice";

export const store = configureStore({
  reducer: {
    sales: SalesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export default store;
