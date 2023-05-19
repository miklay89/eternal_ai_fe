import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type messageState = {
  message: string;
};
const initialState: messageState = {
  message: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
