import { SlotItemInfo } from "../state/gearSlice";
import { SlotName } from "../types";

interface Preset {
  label: string;
  items: SlotItemInfo[];
}

const naxxGear: Preset = {
  label: "Naxx gear",
  items: [
    { slot: SlotName.Head, item: "lionheart_helm" },
    { slot: SlotName.Neck, item: "stormrages_talisman_of_seething" },
    { slot: SlotName.Shoulders, item: "conquerors_spaulders" },
    { slot: SlotName.Back, item: "shroud_of_dominion" },
    { slot: SlotName.Chest, item: "plated_abomination_ribcage" },
    { slot: SlotName.Wrists, item: "hive_defiler_wristguards" },
    { slot: SlotName.Hands, item: "gauntlets_of_annihilation" },
    { slot: SlotName.Belt, item: "girdle_of_the_mentor" },
    { slot: SlotName.Legs, item: "legplates_of_carnage" },
    { slot: SlotName.Boots, item: "chromatic_boots" },
    { slot: SlotName.Ring1, item: "quick_strike_ring" },
    { slot: SlotName.Ring2, item: "band_of_unnatural_forces" },
    { slot: SlotName.Trinket1, item: "kiss_of_the_spider" },
    { slot: SlotName.Trinket2, item: "badge_of_the_swarmguard" },
    { slot: SlotName.MainHand, item: "gressil_dawn_of_ruin" },
    { slot: SlotName.OffHand, item: "the_hungering_cold" },
    { slot: SlotName.Ranged, item: "nerubian_slavemaker" },
  ],
};

const preRaidBis: Preset = {
  label: "Babyhoof's Preraid Bis",
  items: [
    { slot: SlotName.Head, item: "mask_of_the_deceiver" },
    { slot: SlotName.Neck, item: "choker_of_vile_intent" },
    { slot: SlotName.Shoulders, item: "ragesteel_shoulders" },
    { slot: SlotName.Back, item: "vengeance_wrap" },
    { slot: SlotName.Chest, item: "gladiators_plate_chestpiece" },
    { slot: SlotName.Wrists, item: "black_felsteel_bracers" },
    { slot: SlotName.Hands, item: "fel_leather_gloves" },
    { slot: SlotName.Belt, item: "deathforge_girdle" },
    { slot: SlotName.Legs, item: "midnight_legguards" },
    { slot: SlotName.Boots, item: "fel_leather_boots" },
    { slot: SlotName.Ring1, item: "ring_of_arathi_warlords" },
    { slot: SlotName.Ring2, item: "band_of_unnatural_forces" },
    { slot: SlotName.Trinket1, item: "bloodlust_brooch" },
    { slot: SlotName.Trinket2, item: "hourglass_of_the_unraveller" },
    { slot: SlotName.MainHand, item: "dragonmaw" },
    { slot: SlotName.OffHand, item: "gladiators_slicer" },
    { slot: SlotName.Ranged, item: "mamas_insurance" },
  ],
};

const phase1ArmsBis: Preset = {
  label: "Babyhoof's P1 Arms BiS",
  items: [
    { slot: SlotName.Head, item: "warbringer_battle-helm" },
    { slot: SlotName.Neck, item: "adamantite_chain_of_the_unbroken" },
    { slot: SlotName.Shoulders, item: "warbringer_shoulderplates" },
    { slot: SlotName.Back, item: "vengeance_wrap" },
    { slot: SlotName.Chest, item: "warbringer_breastplate" },
    { slot: SlotName.Wrists, item: "bladespire_warbands" },
    { slot: SlotName.Hands, item: "gauntlets_of_martial_perfection" },
    { slot: SlotName.Belt, item: "girdle_of_the_endless_pit" },
    { slot: SlotName.Legs, item: "skulkers_greaves" },
    { slot: SlotName.Boots, item: "ironstriders_of_urgency" },
    { slot: SlotName.Ring1, item: "ring_of_a_thousand_marks" },
    { slot: SlotName.Ring2, item: "mithril_band_of_the_unscarred" },
    { slot: SlotName.Trinket1, item: "bloodlust_brooch" },
    { slot: SlotName.Trinket2, item: "hourglass_of_the_unraveller" },
    { slot: SlotName.MainHand, item: "lionheart_champion" },
    { slot: SlotName.OffHand, item: "" },
    { slot: SlotName.Ranged, item: "mamas_insurance" },
  ],
};

const phase1FuryBis: Preset = {
  label: "Babyhoof's P1 Fury BiS",
  items: [
    { slot: SlotName.Head, item: "warbringer_battle-helm" },
    { slot: SlotName.Neck, item: "choker_of_vile_intent" },
    { slot: SlotName.Shoulders, item: "warbringer_shoulderplates" },
    { slot: SlotName.Back, item: "vengeance_wrap" },
    { slot: SlotName.Chest, item: "warbringer_breastplate" },
    { slot: SlotName.Wrists, item: "bladespire_warbands" },
    { slot: SlotName.Hands, item: "gauntlets_of_martial_perfection" },
    { slot: SlotName.Belt, item: "girdle_of_the_endless_pit" },
    { slot: SlotName.Legs, item: "skulkers_greaves" },
    { slot: SlotName.Boots, item: "ironstriders_of_urgency" },
    { slot: SlotName.Ring1, item: "ring_of_a_thousand_marks" },
    { slot: SlotName.Ring2, item: "shapeshifters_signet" },
    { slot: SlotName.Trinket1, item: "bloodlust_brooch" },
    { slot: SlotName.Trinket2, item: "dragonspine_trophy" },
    { slot: SlotName.MainHand, item: "dragonmaw" },
    { slot: SlotName.OffHand, item: "spiteblade" },
    { slot: SlotName.Ranged, item: "mamas_insurance" },
  ],
};

const p2ArmsPlateBis: Preset = {
  label: "Babyhoof's P2 Arms plate BiS",
  items: [
    { slot: SlotName.Head, item: "destroyer_battlehelm" },
    { slot: SlotName.Neck, item: "pendant_of_the_perilous" },
    { slot: SlotName.Shoulders, item: "destroyer_shoulderblades" },
    { slot: SlotName.Back, item: "vengeance_wrap" },
    { slot: SlotName.Chest, item: "bulwark_of_ancient_kings_no_cd" },
    { slot: SlotName.Wrists, item: "bladespire_warbands" },
    { slot: SlotName.Hands, item: "destroyer_gauntlets" },
    { slot: SlotName.Belt, item: "belt_of_one_hundred_deaths" },
    { slot: SlotName.Legs, item: "destroyer_greaves" },
    { slot: SlotName.Boots, item: "warboots_of_obliteration" },
    { slot: SlotName.Ring1, item: "band_of_the_ranger_general" },
    { slot: SlotName.Ring2, item: "ring_of_reciprocity" },
    { slot: SlotName.Trinket1, item: "dragonspine_trophy" },
    { slot: SlotName.Trinket2, item: "tsunami_talisman" },
    { slot: SlotName.MainHand, item: "twinblade_of_the_phoenix" },
    { slot: SlotName.OffHand, item: "" },
    { slot: SlotName.Ranged, item: "serpent_spine_longbow" },
  ],
};

const p2ArmsLeatherBis: Preset = {
  label: "Babyhoof's P2 Arms leather BiS",
  items: [
    { slot: SlotName.Head, item: "destroyer_battlehelm" },
    { slot: SlotName.Neck, item: "pendant_of_the_perilous" },
    { slot: SlotName.Shoulders, item: "shoulderpads_of_the_stranger" },
    { slot: SlotName.Back, item: "vengeance_wrap" },
    { slot: SlotName.Chest, item: "bulwark_of_ancient_kings_no_cd" },
    { slot: SlotName.Wrists, item: "bladespire_warbands" },
    { slot: SlotName.Hands, item: "gloves_of_the_searing_grip" },
    { slot: SlotName.Belt, item: "belt_of_one_hundred_deaths" },
    { slot: SlotName.Legs, item: "leggings_of_murderous_intent" },
    { slot: SlotName.Boots, item: "warboots_of_obliteration" },
    { slot: SlotName.Ring1, item: "band_of_the_ranger_general" },
    { slot: SlotName.Ring2, item: "ring_of_reciprocity" },
    { slot: SlotName.Trinket1, item: "dragonspine_trophy" },
    { slot: SlotName.Trinket2, item: "tsunami_talisman" },
    { slot: SlotName.MainHand, item: "twinblade_of_the_phoenix" },
    { slot: SlotName.OffHand, item: "" },
    { slot: SlotName.Ranged, item: "serpent_spine_longbow" },
  ],
};

const p2FuryPlateBis: Preset = {
  label: "Babyhoof's P2 Fury plate BiS",
  items: [
    { slot: SlotName.Head, item: "destroyer_battlehelm" },
    { slot: SlotName.Neck, item: "pendant_of_the_perilous" },
    { slot: SlotName.Shoulders, item: "destroyer_shoulderblades" },
    { slot: SlotName.Back, item: "vengeance_wrap" },
    { slot: SlotName.Chest, item: "bulwark_of_ancient_kings_no_cd" },
    { slot: SlotName.Wrists, item: "bladespire_warbands" },
    { slot: SlotName.Hands, item: "destroyer_gauntlets" },
    { slot: SlotName.Belt, item: "belt_of_one_hundred_deaths" },
    { slot: SlotName.Legs, item: "leggings_of_murderous_intent" },
    { slot: SlotName.Boots, item: "warboots_of_obliteration" },
    { slot: SlotName.Ring1, item: "band_of_the_ranger_general" },
    { slot: SlotName.Ring2, item: "ring_of_a_thousand_marks" },
    { slot: SlotName.Trinket1, item: "dragonspine_trophy" },
    { slot: SlotName.Trinket2, item: "tsunami_talisman" },
    { slot: SlotName.MainHand, item: "dragonstrike" },
    { slot: SlotName.OffHand, item: "talon_of_azshara" },
    { slot: SlotName.Ranged, item: "serpent_spine_longbow" },
  ],
};

const p2FuryLeatherBis: Preset = {
  label: "Babyhoof's P2 Fury leather BiS",
  items: [
    { slot: SlotName.Head, item: "destroyer_battlehelm" },
    { slot: SlotName.Neck, item: "pendant_of_the_perilous" },
    { slot: SlotName.Shoulders, item: "shoulderpads_of_the_stranger" },
    { slot: SlotName.Back, item: "vengeance_wrap" },
    { slot: SlotName.Chest, item: "bulwark_of_ancient_kings_no_cd" },
    { slot: SlotName.Wrists, item: "bladespire_warbands" },
    { slot: SlotName.Hands, item: "gloves_of_the_searing_grip" },
    { slot: SlotName.Belt, item: "belt_of_one_hundred_deaths" },
    { slot: SlotName.Legs, item: "leggings_of_murderous_intent" },
    { slot: SlotName.Boots, item: "warboots_of_obliteration" },
    { slot: SlotName.Ring1, item: "band_of_the_ranger_general" },
    { slot: SlotName.Ring2, item: "ring_of_reciprocity" },
    { slot: SlotName.Trinket1, item: "dragonspine_trophy" },
    { slot: SlotName.Trinket2, item: "tsunami_talisman" },
    { slot: SlotName.MainHand, item: "dragonstrike" },
    { slot: SlotName.OffHand, item: "talon_of_azshara" },
    { slot: SlotName.Ranged, item: "serpent_spine_longbow" },
  ],
};

export default [
  naxxGear,
  preRaidBis,
  phase1ArmsBis,
  phase1FuryBis,
  p2ArmsPlateBis,
  p2ArmsLeatherBis,
  p2FuryPlateBis,
  p2FuryLeatherBis,
];
