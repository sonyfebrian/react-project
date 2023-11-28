import { configureStore } from "@reduxjs/toolkit";
import { salesReducer } from "./slices/SalesSlice";
import { usersReducer } from "./slices/UsersSlice";

export const store = configureStore({
  reducer: {
    sales: salesReducer,
    user: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export default store;
