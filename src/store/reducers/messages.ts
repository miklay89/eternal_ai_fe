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
    addUserMessage: (
      state,
      action: PayloadAction<{ id: string; text: string }>
    ) => {
      const uniqIds = [...new Set(state.map((m) => m.id))];
      if (uniqIds.includes(action.payload.id)) return;
      const userMsg = {
        id: action.payload.id,
        isAi: false,
        text: action.payload.text,
      };
      state.push(userMsg);
    },
    addAIMessage: (
      state,
      action: PayloadAction<{ id: string; text: string }>
    ) => {
      const uniqIds = [...new Set(state.map((m) => m.id))];
      if (uniqIds.includes(action.payload.id)) return;
      const aiMsg = {
        id: action.payload.id,
        isAi: true,
        text: action.payload.text,
      };
      state.push(aiMsg);
    },
    addLoadingMessage: (state) => {
      const uniqIds = [...new Set(state.map((m) => m.id))];
      const loadingMsg = {
        id: "loading",
        isAi: true,
        text: "",
      };
      if (uniqIds.includes(loadingMsg.id)) return;
      state.push(loadingMsg);
    },
    addScrollMessage: (state) => {
      const uniqIds = [...new Set(state.map((m) => m.id))];
      const scrollMsg = {
        id: "scroll",
        isAi: true,
        text: "",
      };
      if (uniqIds.includes(scrollMsg.id)) return;
      state.push(scrollMsg);
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

export const { addUserMessage } = messagesSlice.actions;
export const { addAIMessage } = messagesSlice.actions;
export const { addLoadingMessage } = messagesSlice.actions;
export const { addScrollMessage } = messagesSlice.actions;
export const { addMessagesFromHistory } = messagesSlice.actions;
export const { removePrevUserMessage } = messagesSlice.actions;
export const { removeLoadingMessage } = messagesSlice.actions;
export const { removeScrollMessage } = messagesSlice.actions;
export const { eraseChat } = messagesSlice.actions;

export default messagesSlice.reducer;
