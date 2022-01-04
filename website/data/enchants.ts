import { SelectValue, SlotName } from "../types";

export function getEnchants(slot: SlotName): SelectValue[] {
  return enchants[slot];
}

const enchants = {
  head: [
    { value: "+8 strength", label: "+8 strength" },
    { value: "+10 haste", label: "+10 haste" },
    { value: "ferocity", label: "+16 hit +34 AP" },
  ],
};
