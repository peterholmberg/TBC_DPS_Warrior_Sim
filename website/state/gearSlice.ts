import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Slot } from "../types";
import { AppState } from "./store";

export interface GearState {
  head: string;
  neck: string;
  shoulders: string;
  back: string;
  chest: string;
  wrists: string;
  hands: string;
  belt: string;
  legs: string;
  feet: string;
  ring1: string;
  ring2: string;
  trinket1: string;
  trinket2: string;
  mainHand: string;
  offHand?: string;
  ranged: string;
}

const initialState: GearState = {
  head: "",
  neck: "",
  shoulders: "",
  back: "",
  chest: "",
  wrists: "",
  hands: "",
  belt: "",
  legs: "",
  feet: "",
  ring1: "",
  ring2: "",
  trinket1: "",
  trinket2: "",
  mainHand: "",
  offHand: "",
  ranged: "",
};
export type SlotItemInfo = { slot: Slot; item: string };

export const gearSlice = createSlice({
  name: "gear",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<SlotItemInfo>) => {
      state[action.payload.slot] = action.payload.item;
    },
    setPreset: (state, action: PayloadAction<SlotItemInfo[]>) => {
      for (const slotItemInfo of action.payload) {
        state[slotItemInfo.slot] = slotItemInfo.item;
      }
    },
  },
});

export const { setItem, setPreset } = gearSlice.actions;

export const selectSlot = (slot: string) =>
  useSelector((state: AppState) => state.gear[slot]);

export default gearSlice.reducer;
