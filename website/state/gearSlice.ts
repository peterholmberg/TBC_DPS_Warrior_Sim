import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import armor from "../data/armor";
import { SelectValue, Slot, SlotName } from "../types";
import { AppState } from "./store";

export interface GearState {
  [SlotName.Head]: Slot;
  [SlotName.Neck]: Slot;
  [SlotName.Shoulders]: Slot;
  [SlotName.Back]: Slot;
  [SlotName.Chest]: Slot;
  [SlotName.Wrists]: Slot;
  [SlotName.Hands]: Slot;
  [SlotName.Belt]: Slot;
  [SlotName.Legs]: Slot;
  [SlotName.Boots]: Slot;
  [SlotName.Ring1]: Slot;
  [SlotName.Ring2]: Slot;
  [SlotName.Trinket1]: Slot;
  [SlotName.Trinket2]: Slot;
  [SlotName.MainHand]: Slot;
  [SlotName.OffHand]?: Slot;
  [SlotName.Ranged]: Slot;
}

const initialState: GearState = {
  [SlotName.Head]: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  neck: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  shoulders: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  back: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  chest: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  wrists: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  hands: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  belt: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  legs: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  boots: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  ring1: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  ring2: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  trinket1: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  trinket2: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  mainHand: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  offHand: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
  ranged: {
    item: "",
    enchant: "",
    gems: ["no_gem", "no_gem", "no_gem"],
  },
};
export type SlotItemInfo = { slot: SlotName; item: string };
export type SlotEnchantInfo = { slot: SlotName; enchant: string };
export type SlotGemInfo = { slot: SlotName; gems: string[] };

export const gearSlice = createSlice({
  name: "gear",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<SlotItemInfo>) => {
      state[action.payload.slot].item = action.payload.item;
    },
    setPreset: (state, action: PayloadAction<SlotItemInfo[]>) => {
      for (const slotItemInfo of action.payload) {
        state[slotItemInfo.slot].item = slotItemInfo.item;
      }
    },
    setEnchant: (state, action: PayloadAction<SlotEnchantInfo>) => {
      state[action.payload.slot].enchant = action.payload.enchant;
    },
    setGems: (state, action: PayloadAction<SlotGemInfo>) => {
      state[action.payload.slot].gems = action.payload.gems;
    },
  },
});

export const { setItem, setPreset, setEnchant, setGems } = gearSlice.actions;

export const selectSlotItem = (slot: SlotName) => {
  const items = armor[slot];
  return useSelector((state: AppState) =>
    items.find((item) => item.value === state.gear[slot].item)
  );
};
  

export const selectSlotEnchant = (slot: SlotName) =>
  useSelector((state: AppState) => state.gear[slot].enchant);

export const selectSlotGems = (slot: SlotName) =>
  useSelector((state: AppState) => state.gear[slot].gems);

export default gearSlice.reducer;
