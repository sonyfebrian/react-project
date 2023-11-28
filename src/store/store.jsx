import { configureStore } from "@reduxjs/toolkit";
import SalesSlice from "./slices/SalesSlice";
import UserSlice from "./slices/UsersSlice";

export const store = configureStore({
  reducer: {
    sales: SalesSlice,
    users: UserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export default store;
