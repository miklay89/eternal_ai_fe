import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalState = {
  open: string;
};
const initialState: ModalState = {
  open: "none",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.open = action.payload;
    },
  },
});

export const { openModal } = modalSlice.actions;
export default modalSlice.reducer;
