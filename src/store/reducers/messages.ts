import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type messageState = {
  id: string;
  isAi: boolean;
  text: string;
};
const initialState: messageState[] = [];

export const messagesSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<messageState>) => {
      const uniqIds = [...new Set(state.map((m) => m.id))];
      if (uniqIds.includes(action.payload.id)) return;
      state.push(action.payload);
    },
    removePrevUserMessage: (state) => {
      return [...state.filter((a) => a.id !== "template")];
    },
    removeLoadingMessage: (state) => {
      return [...state.filter((a) => a.id !== "loading")];
    },
    eraseChat: (state) => {
      return (state = []);
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export const { removePrevUserMessage } = messagesSlice.actions;
export const { removeLoadingMessage } = messagesSlice.actions;
export const { eraseChat } = messagesSlice.actions;
export default messagesSlice.reducer;
