import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import messagesReducer from "./reducers/messages";
import soulReducer from "./reducers/soul";
import socketReducer from "./reducers/socket";
import modalReducer from "./reducers/modals";
import profileReducer from "./reducers/profile";
import loadingReducer from "./reducers/loading";

export const store = configureStore({
  reducer: {
    isAuth: authReducer,
    message: messagesReducer,
    soul: soulReducer,
    socket: socketReducer,
    modal: modalReducer,
    profile: profileReducer,
    loading: loadingReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
