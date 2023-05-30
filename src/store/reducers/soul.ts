import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { individualsData } from "../../components/pages/home/components/promo/Cards.data";

export type SoulState = {
  soul: {
    fullName: string;
    title: string;
    imgUrl: string;
    substrateUrl: string;
    id: number;
    uuid: string;
  };
  isSet: boolean;
};
const initialState: SoulState = {
  soul: {
    fullName: individualsData[0].fullName,
    title: individualsData[0].title,
    imgUrl: individualsData[0].imgUrl,
    substrateUrl: individualsData[0].substrateUrl,
    id: individualsData[0].id,
    uuid: individualsData[0].uuid,
  },
  isSet: false,
};

export const soulSlice = createSlice({
  name: "soul",
  initialState,
  reducers: {
    setSoul: (state, action: PayloadAction<SoulState>) => {
      state.soul = action.payload.soul;
      state.isSet = action.payload.isSet;
    },
  },
});

export const { setSoul } = soulSlice.actions;
export default soulSlice.reducer;
