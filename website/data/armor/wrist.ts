import { SelectValue } from "../../types";

const plateWrists: SelectValue[] = [
  {
    value: "amber_bands_of_the_aggressor",
    label: "Amber Bands of the Aggressor",
  },
  { value: "bands_of_syth", label: "Bands of Syth" },
  { value: "black_felsteel_bracers", label: "Black Felsteel Bracers" },
  { value: "bladespire_warbands", label: "Bladespire Warbands" },
  { value: "bracers_of_eradication", label: "Bracers of Eradication" },
  { value: "demolishers_bracers", label: "Demolishers Bracers" },
  { value: "furious_shackles", label: "Furious Shackles" },
  { value: "hive_defiler_wristguards", label: "Hive Defiler Wristguards" },
  { value: "marshals_plate_bracers", label: "Marshals Plate Bracers" },
  { value: "marshals_scaled_bracers", label: "Marshals Scaled Bracers" },
  { value: "swiftsteel_bracers", label: "Swiftsteel Bracers" },
  { value: "wristguards_of_vengeance", label: "Wristguards of Vengeance" },
  { value: "veterans_plate_bracers", label: "Veterans Plate Bracers" },
];

const leatherWrists: SelectValue[] = [
  { value: "aged_leather_bindings", label: "Aged Leather Bindings" },
  { value: "armwraps_of_disdain", label: "Armwraps of Disdain" },
  { value: "bracers_of_maliciousness", label: "Bracers of Maliciousness" },
  { value: "deadly_cuffs", label: "Deadly Cuffs" },
  { value: "insidious_bands", label: "Insidious Bands" },
  { value: "marshals_leather_bracers", label: "Marshals Leather Bracers" },
  { value: "nightfall_wristguards", label: "Nightfall Wristguards" },
  { value: "nightstalkers_wristguards", label: "Nightstalkers Wristguards" },
  { value: "primalstrike_bracers", label: "Primalstrike Bracers" },
  { value: "shard_bound_bracers", label: "Shard Bound Bracers" },
  { value: "spymistress_wristguards", label: "Spymistress Wristguards" },
  { value: "swiftstrike_bracers", label: "Swiftstrike Bracers" },
  { value: "vambraces_of_ending", label: "Vambraces of Ending" },
];

const mailWrists: SelectValue[] = [
  {
    value: "bands_of_the_celestial_archer",
    label: "Bands of the Celestial Archer",
  },
  {
    value: "bindings_of_lighting_reflexes",
    label: "Bindings of Lighting Reflexes",
  },
  { value: "bracers_of_the_pathfinder", label: "Bracers of the Pathfinder" },
  { value: "ebon_netherscale_bracers", label: "Ebon Netherscale Bracers" },
  { value: "felstalker_bracers", label: "Felstalker Bracers" },
  { value: "marshals_linked_bracers", label: "Marshals Linked Bracers" },
  { value: "stalkers_war_bands", label: "Stalkers War Bands" },
  { value: "true_aim_stalker_bands", label: "True Aim Stalker Bands" },
  { value: "wraps_of_precise_flight", label: "Wraps of Precise Flight" },
];

export default {
  plate: plateWrists,
  mail: mailWrists,
  leather: leatherWrists,
};
