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
    addMessagesFromHistory: (state, action: PayloadAction<messageState[]>) => {
      const scrollMsg = {
        id: "scroll",
        isAi: true,
        text: "",
      };
      state = [...action.payload, scrollMsg, ...state];
      return state;
    },
    removePrevUserMessage: (state) => {
      return [...state.filter((a) => a.id !== "template")];
    },
    removeLoadingMessage: (state) => {
      return [...state.filter((a) => a.id !== "loading")];
    },
    removeScrollMessage: (state) => {
      return [...state.filter((a) => a.id !== "scroll")];
    },
    eraseChat: (state) => {
      return (state = []);
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export const { addMessagesFromHistory } = messagesSlice.actions;
export const { removePrevUserMessage } = messagesSlice.actions;
export const { removeLoadingMessage } = messagesSlice.actions;
export const { removeScrollMessage } = messagesSlice.actions;
export const { eraseChat } = messagesSlice.actions;
export default messagesSlice.reducer;
