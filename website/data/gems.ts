import { GroupedSelectValue, SelectValue, SlotName } from "../types";

export function getGems(slot: SlotName): GroupedSelectValue[] {
  if (slot === SlotName.Head) {
    return getHeadGems();
  }
  return gems;
}

export function getAllGems() {
  return [
    ...redGems,
    ...yellowGems,
    ...purpleGems,
    ...greenGems,
    ...metaGems,
    ...orangeGems,
  ];
}

function getHeadGems(): GroupedSelectValue[] {
  return [
    {
      label: "Meta",
      options: metaGems,
    },
    ...gems,
  ];
}

const redGems = [
  { value: "+4 strength", label: "+4 str" },
  { value: "+6 strength", label: "+6 str" },
  { value: "+8 strength", label: "+8 str" },
  { value: "+4 agility", label: "+4 agi" },
  { value: "+6 agility", label: "+6 agi" },
  { value: "+10 agility", label: "+10 agi" },
  { value: "+20 AP", label: "+20 AP" },
  { value: "+24 AP", label: "+24 AP" },
];
const purpleGems = [
  { value: "+3 strength", label: "+3 str" },
  { value: "+5 strength", label: "+5 str" },
  { value: "+3 agility", label: "+3 agi" },
  { value: "+5 agility", label: "+5 agi" },
];
const yellowGems = [
  { value: "+4 crit", label: "+4 crit" },
  { value: "+6 crit", label: "+6 crit" },
  { value: "+8 crit", label: "+8 crit" },
  { value: "+10 crit", label: "+10 crit" },
  { value: "+12 crit", label: "+12 crit" },
  { value: "+4 hit", label: "+4 hit" },
  { value: "+6 hit", label: "+6 hit" },
  { value: "+8 hit", label: "+8 hit" },
  { value: "+10 hit", label: "+10 hit" },
  { value: "+12 hit", label: "+12 hit" },
];
const greenGems = [
  { value: "+3 crit", label: "+3 crit" },
  { value: "+5 crit", label: "+5 crit" },
];

const orangeGems = [
  { value: "+3 crit_+3_str", label: "+3 crit/+3 str" },
  { value: "+4 crit_+4_str", label: "+4 crit/+4 str" },
  { value: "+4 crit_+5_str", label: "+4 crit/+5 str" },
  { value: "+5 crit_+5_str", label: "+5 crit/+5 str" },
];
const metaGems = [
  { value: "+3 dmg", label: "+3 dmg" },
  { value: "+12 crit", label: "+12 crit" },
  { value: "agi critDmg", label: "agi/crit damage" },
  { value: "haste proc", label: "Haste proc" },
];

const gems: GroupedSelectValue[] = [
  {
    label: "Red",
    options: redGems,
  },
  {
    label: "Purple",
    options: purpleGems,
  },
  {
    label: "Yellow",
    options: yellowGems,
  },
  {
    label: "Orange",
    options: orangeGems,
  },

  {
    label: "Green",
    options: greenGems,
  },
];
