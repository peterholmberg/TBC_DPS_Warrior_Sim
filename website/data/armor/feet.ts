import { SelectValue } from "../../types";

const plateFeet: SelectValue[] = [
  { value: "chromatic_boots", label: "Chromatic Boots" },
  { value: "clocktocks_jumpers", label: "Clocktocks Jumpers" },
  { value: "dreadboots_of_the_legion", label: "Dreadboots of the Legion" },
  { value: "eaglecrest_warboots", label: "Eaglecrest Warboots" },
  { value: "generals_plate_greaves", label: "Generals Plate Greaves" },
  { value: "generals_scaled_greaves", label: "Generals Scaled Greaves" },
  { value: "ironstriders_of_urgency", label: "Ironstriders of Urgency" },
  { value: "obsidian_clodstompers", label: "Obsidian Clodstompers" },
  { value: "shatari_wrought_greaves", label: "Shatari Wrought Greaves" },
  { value: "veterans_plate_greaves", label: "Veterans Plate Greaves" },
  { value: "vortex_walking_boots", label: "Vortex Walking Boots" },
  { value: "warboots_of_obliteration", label: "Warboots of Obliteration" },
];
const mailFeet: SelectValue[] = [
  { value: "cobra_lash_boots", label: "Cobra Lash Boots" },
  { value: "feroucious_swift_kickers", label: "Feroucious Swift Kickers" },
  { value: "fiend_slayer_boots", label: "Fiend Slayer Boots" },
  { value: "quickstriders_moccasins", label: "Quickstriders Moccasins" },
  { value: "softstep_boots_of_tracking", label: "Softstep Boots of Tracking" },
  { value: "star_strider_boots", label: "Star Strider Boots" },
];
const leatherFeet: SelectValue[] = [
  { value: "black_featherlight_boots", label: "Black Featherlight Boots" },
  { value: "boots_of_the_shadow_flame", label: "Boots of the Shadow Flame" },
  {
    value: "boots_of_the_shifting_sands",
    label: "Boots of the Shifting Sands",
  },
  { value: "boots_of_the_unjust", label: "Boots of the Unjust" },
  { value: "boots_of_utter_darkness", label: "Boots of Utter Darkness" },
  { value: "edgewalker_longboots", label: "Edgewalker Longboots" },
  { value: "farahlite_studded_boots", label: "Farahlite Studded Boots" },
  { value: "fel_leather_boots", label: "Fel Leather Boots" },
  { value: "felboar_hide_shoes", label: "Felboar Hide Shoes" },
  { value: "rapscallion_boots", label: "Rapscallion Boots" },
  { value: "shadowmasters_boots", label: "Shadowmasters Boots" },
  { value: "the_masters_treads", label: "The Masters Treads" },
  { value: "threads_of_the_den_mother", label: "Threads of the Den Mother" },
  { value: "zierhuts_lost_treads", label: "Zierhuts Lost Treads" },
];

export default {
  plate: plateFeet,
  mail: mailFeet,
  leather: leatherFeet,
};
