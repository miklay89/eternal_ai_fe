import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SocketState = {
  connection: boolean;
};
const initialState: SocketState = {
  connection: false,
};

export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setConnection: (state, action: PayloadAction<boolean>) => {
      state.connection = action.payload;
    },
  },
});

export const { setConnection } = socketSlice.actions;
export default socketSlice.reducer;
