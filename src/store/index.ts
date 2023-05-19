import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";

export const store = configureStore({
  reducer: {
    isAuth: authReducer,
    message: messageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
