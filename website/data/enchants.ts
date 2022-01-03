import { SlotName } from "../types";

export function getEnchants(slot: SlotName) {
  return enchants[slot];
}

const enchants = {
  head: [],
};
