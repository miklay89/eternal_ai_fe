import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

export const store = configureStore({
  reducer: {
    isAuth: authReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
