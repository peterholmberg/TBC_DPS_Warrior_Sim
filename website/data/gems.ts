import { SelectValue, SlotName } from "../types";

const gems: Record<string, SelectValue[]> = {
  red: [
    "+4 strength",
    "+6 strength",
    "+8 strength",
    "+4 agility",
    "+6 agility",
    "+10 agility",
    "+20 AP",
    "+24 AP",
  ],

  purple: ["+3 strength", "+5 strength", "+3 agility", "+5 agility"],

  yellow: [
    "+4 crit",
    "+6 crit",
    "+8 crit",
    "+10 crit",
    "+12 crit",
    "+4 hit",
    "+6 hit",
    "+8 hit",
    "+10 hit",
    "+12 hit",
  ],
  orange: [
    "+3 crit_+3_str",
    "+4 crit_+4_str",
    "+4 crit_+5_str",
    "+5 crit_+5_str",
  ],
  green: ["+3 crit", "+5 crit"],
};

function getHeadGems(): Record<string, SelectValue[]> {
  return {
    meta: ["+3 dmg", "+12 crit", "agi critDmg", "haste proc"],
    ...gems,
  };
}

export function getGems(slot: SlotName): Record<string, SelectValue[]> {
  if (slot === SlotName.Head) {
    return getHeadGems();
  }
  return gems;
}
