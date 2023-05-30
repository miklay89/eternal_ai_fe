import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProfileState = {
  user: {
    email: string;
    name: string | null;
    phone: string | null;
    subscriptionDue: string | null;
    freeQuestionsLeft: number;
    isSubscribed: boolean;
  };
};

const initialState: ProfileState = {
  user: {
    email: "",
    name: null,
    phone: null,
    subscriptionDue: null,
    freeQuestionsLeft: 3,
    isSubscribed: false,
  },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileState>) => {
      state.user = action.payload.user;
    },
    setInitialState: (state) => {
      state.user = {
        email: "",
        name: null,
        phone: null,
        subscriptionDue: null,
        freeQuestionsLeft: 3,
        isSubscribed: false,
      };
    },
  },
});

export const { setProfile } = profileSlice.actions;
export const { setInitialState } = profileSlice.actions;

export default profileSlice.reducer;
