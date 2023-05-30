import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LoadingState = {
  isLoading: boolean;
};
const initialState: LoadingState = {
  isLoading: true,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
