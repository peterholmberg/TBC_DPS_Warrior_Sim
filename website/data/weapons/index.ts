import { oneHandSwords } from "./swords";

export const mainHands = {
  swords: oneHandSwords.filter((s) => !s.offHandOnly),
};

export const offHands = {
  swords: oneHandSwords.filter((s) => !s.mainHandOnly),
};
