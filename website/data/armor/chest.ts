import { SelectValue } from "../../types";

const plateChests: SelectValue[] = [
  { value: "blackened_chestplate", label: "Blackened Chestplate" },
  { value: "breastplate_of_kings", label: "Breastplate of Kings" },
  { value: "bulwark_of_ancient_kings", label: "Bulwark of Ancient Kings" },
  {
    value: "bulwark_of_ancient_kings_no_cd",
    label: "Bulwark of Ancient Kings No Cd",
  },
  { value: "bulwark_of_kings", label: "Bulwark of Kings" },
  { value: "bulwark_of_kings_no_cd", label: "Bulwark of Kings No Cd" },
  { value: "chestguard_of_exile", label: "Chestguard of Exile" },
  { value: "chestplate_of_adal", label: "Chestplate of Adal" },
  { value: "crimsonforge_breastplate", label: "Crimsonforge Breastplate" },
  { value: "destroyer_breastplate", label: "Destroyer Breastplate" },
  { value: "doomplate_chestguard", label: "Doomplate Chestguard" },
  { value: "durotans_battle_harness", label: "Durotans Battle Harness" },
  {
    value: "gladiators_plate_chestpiece",
    label: "Gladiators Plate Chestpiece",
  },
  { value: "heartshatter_breastplate", label: "Heartshatter Breastplate" },
  {
    value: "high_warlords_plate_chestpiece",
    label: "High Warlords Plate Chestpiece",
  },
  { value: "krakken_heart_breastplate", label: "Krakken Heart Breastplate" },
  {
    value: "merciless_gladiators_plate_chestpiece",
    label: "Merciless Gladiators Plate Chestpiece",
  },
  { value: "onslaught_breastplate", label: "Onslaught Breastplate" },
  { value: "plated_abomination_ribcage", label: "Plated Abomination Ribcage" },
  { value: "ragesteel_breastplate", label: "Ragesteel Breastplate" },
  { value: "the_exarchs_protector", label: "The Exarchs Protector" },
  {
    value: "vengeful_gladiators_plate_chestpiece",
    label: "Vengeful Gladiators Plate Chestpiece",
  },
  { value: "warbringer_breastplate", label: "Warbringer Breastplate" },
];

const leatherChests: SelectValue[] = [
  { value: "bloodsea_brigand_s_vest", label: "Bloodsea Brigand S Vest" },
  { value: "chestguard_of_no_remorse", label: "Chestguard of No Remorse" },
  { value: "chestguard_of_the_conniver", label: "Chestguard of the Conniver" },
  {
    value: "chestguard_of_the_dark_stalker",
    label: "Chestguard of the Dark Stalker",
  },
  { value: "ghoul_skin_tunic", label: "Ghoul Skin Tunic" },
  { value: "maghari_scouts_tunic", label: "Maghari Scouts Tunic" },
  { value: "midnight_chestguard", label: "Midnight Chestguard" },
  { value: "nether_shadow_tunic", label: "Nether Shadow Tunic" },
  { value: "primalstrike_vest", label: "Primalstrike Vest" },
  { value: "shadowprowlers_chestguard", label: "Shadowprowlers Chestguard" },
  { value: "terrorweave_tunic", label: "Terrorweave Tunic" },
  { value: "tunic_of_assassination", label: "Tunic of Assassination" },
  { value: "vest_of_vengeance", label: "Vest of Vengeance" },
  { value: "wastewalker_tunic", label: "Wastewalker Tunic" },
];

const mailChests: SelectValue[] = [
  {
    value: "ebon_netherscale_breastplate",
    label: "Ebon Netherscale Breastplate",
  },
  { value: "nether_chain_shirt", label: "Nether Chain Shirt" },
  { value: "ranger_generals_chestguard", label: "Ranger Generals Chestguard" },
  {
    value: "twisting_nether_chain_shirt",
    label: "Twisting Nether Chain Shirt",
  },
  { value: "vest_of_mounting_assault", label: "Vest of Mounting Assault" },
];

export default {
  plate: plateChests,
  mail: mailChests,
  leather: leatherChests,
};
