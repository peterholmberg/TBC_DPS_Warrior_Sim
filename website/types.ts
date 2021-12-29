export interface SelectValue {
    value: string;
    label: string;
}

export interface WeaponSelect extends SelectValue {
  mainHandOnly: boolean;
  offHandOnly: boolean;
}

export enum Slot {
  Head = "head",
  Neck = "neck",
  Shoulders = "shoulders",
  Back = "back",
  Chest = "chest",
  Wrists = "wrists",
  Hands = "hands",
  Belt = "belt",
  Legs = "legs",
  Boots = "boots",
  Ring1 = "ring1",
  Ring2 = "ring2",
  Trinket1 = "trinket1",
  Trinket2 = "trinket2",
  MainHand = "mainHand",
  OffHand = "offHand",
  Ranged = "ranged",
}