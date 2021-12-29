import { SlotItemInfo } from "../state/gearSlice";
import { Slot } from "../types";

interface Preset {
  label: string;
  items: SlotItemInfo[];
}

const naxxGear: Preset = {
  label: "Naxx gear",
  items: [
    { slot: Slot.Head, item: "lionheart_helm" },
    { slot: Slot.Neck, item: "stormrages_talisman_of_seething" },
    { slot: Slot.Shoulders, item: "conquerors_spaulders" },
    { slot: Slot.Back, item: "shroud_of_dominion" },
    { slot: Slot.Chest, item: "plated_abomination_ribcage" },
    { slot: Slot.Wrists, item: "hive_defiler_wristguards" },
    { slot: Slot.Hands, item: "gauntlets_of_annihilation" },
    { slot: Slot.Belt, item: "girdle_of_the_mentor" },
    { slot: Slot.Legs, item: "legplates_of_carnage" },
    { slot: Slot.Boots, item: "chromatic_boots" },
    { slot: Slot.Ring1, item: "quick_strike_ring" },
    { slot: Slot.Ring2, item: "band_of_unnatural_forces" },
    { slot: Slot.Trinket1, item: "kiss_of_the_spider" },
    { slot: Slot.Trinket2, item: "badge_of_the_swarmguard" },
    { slot: Slot.MainHand, item: "gressil_dawn_of_ruin" },
    { slot: Slot.OffHand, item: "the_hungering_cold" },
    { slot: Slot.Ranged, item: "nerubian_slavemaker" },
  ],
};

const preRaidBis: Preset = {
  label: "Babyhoof's Preraid Bis",
  items: [
    { slot: Slot.Head, item: "mask_of_the_deceiver" },
    { slot: Slot.Neck, item: "choker_of_vile_intent" },
    { slot: Slot.Shoulders, item: "ragesteel_shoulders" },
    { slot: Slot.Back, item: "vengeance_wrap" },
    { slot: Slot.Chest, item: "gladiators_plate_chestpiece" },
    { slot: Slot.Wrists, item: "black_felsteel_bracers" },
    { slot: Slot.Hands, item: "fel_leather_gloves" },
    { slot: Slot.Belt, item: "deathforge_girdle" },
    { slot: Slot.Legs, item: "midnight_legguards" },
    { slot: Slot.Boots, item: "fel_leather_boots" },
    { slot: Slot.Ring1, item: "ring_of_arathi_warlords" },
    { slot: Slot.Ring2, item: "band_of_unnatural_forces" },
    { slot: Slot.Trinket1, item: "bloodlust_brooch" },
    { slot: Slot.Trinket2, item: "hourglass_of_the_unraveller" },
    { slot: Slot.MainHand, item: "dragonmaw" },
    { slot: Slot.OffHand, item: "gladiators_slicer" },
    { slot: Slot.Ranged, item: "mamas_insurance" },
  ],
};

const phase1ArmsBis: Preset = {
  label: "Babyhoof's P1 Arms BiS",
  items: [
    { slot: Slot.Head, item: "warbringer_battle-helm" },
    { slot: Slot.Neck, item: "adamantite_chain_of_the_unbroken" },
    { slot: Slot.Shoulders, item: "warbringer_shoulderplates" },
    { slot: Slot.Back, item: "vengeance_wrap" },
    { slot: Slot.Chest, item: "warbringer_breastplate" },
    { slot: Slot.Wrists, item: "bladespire_warbands" },
    { slot: Slot.Hands, item: "gauntlets_of_martial_perfection" },
    { slot: Slot.Belt, item: "girdle_of_the_endless_pit" },
    { slot: Slot.Legs, item: "skulkers_greaves" },
    { slot: Slot.Boots, item: "ironstriders_of_urgency" },
    { slot: Slot.Ring1, item: "ring_of_a_thousand_marks" },
    { slot: Slot.Ring2, item: "mithril_band_of_the_unscarred" },
    { slot: Slot.Trinket1, item: "bloodlust_brooch" },
    { slot: Slot.Trinket2, item: "hourglass_of_the_unraveller" },
    { slot: Slot.MainHand, item: "lionheart_champion" },
    { slot: Slot.OffHand, item: "" },
    { slot: Slot.Ranged, item: "mamas_insurance" },
  ],
};

const phase1FuryBis: Preset = {
  label: "Babyhoof's P1 Fury BiS",
  items: [
    { slot: Slot.Head, item: "warbringer_battle-helm" },
    { slot: Slot.Neck, item: "choker_of_vile_intent" },
    { slot: Slot.Shoulders, item: "warbringer_shoulderplates" },
    { slot: Slot.Back, item: "vengeance_wrap" },
    { slot: Slot.Chest, item: "warbringer_breastplate" },
    { slot: Slot.Wrists, item: "bladespire_warbands" },
    { slot: Slot.Hands, item: "gauntlets_of_martial_perfection" },
    { slot: Slot.Belt, item: "girdle_of_the_endless_pit" },
    { slot: Slot.Legs, item: "skulkers_greaves" },
    { slot: Slot.Boots, item: "ironstriders_of_urgency" },
    { slot: Slot.Ring1, item: "ring_of_a_thousand_marks" },
    { slot: Slot.Ring2, item: "shapeshifters_signet" },
    { slot: Slot.Trinket1, item: "bloodlust_brooch" },
    { slot: Slot.Trinket2, item: "dragonspine_trophy" },
    { slot: Slot.MainHand, item: "dragonmaw" },
    { slot: Slot.OffHand, item: "spiteblade" },
    { slot: Slot.Ranged, item: "mamas_insurance" },
  ],
};

const p2ArmsPlateBis: Preset = {
  label: "Babyhoof's P2 Arms plate BiS",
  items: [
    { slot: Slot.Head, item: "destroyer_battlehelm" },
    { slot: Slot.Neck, item: "pendant_of_the_perilous" },
    { slot: Slot.Shoulders, item: "destroyer_shoulderblades" },
    { slot: Slot.Back, item: "vengeance_wrap" },
    { slot: Slot.Chest, item: "bulwark_of_ancient_kings_no_cd" },
    { slot: Slot.Wrists, item: "bladespire_warbands" },
    { slot: Slot.Hands, item: "destroyer_gauntlets" },
    { slot: Slot.Belt, item: "belt_of_one_hundred_deaths" },
    { slot: Slot.Legs, item: "destroyer_greaves" },
    { slot: Slot.Boots, item: "warboots_of_obliteration" },
    { slot: Slot.Ring1, item: "band_of_the_ranger_general" },
    { slot: Slot.Ring2, item: "ring_of_reciprocity" },
    { slot: Slot.Trinket1, item: "dragonspine_trophy" },
    { slot: Slot.Trinket2, item: "tsunami_talisman" },
    { slot: Slot.MainHand, item: "twinblade_of_the_phoenix" },
    { slot: Slot.OffHand, item: "" },
    { slot: Slot.Ranged, item: "serpent_spine_longbow" },
  ],
};

const p2ArmsLeatherBis: Preset = {
  label: "Babyhoof's P2 Arms leather BiS",
  items: [
    { slot: Slot.Head, item: "destroyer_battlehelm" },
    { slot: Slot.Neck, item: "pendant_of_the_perilous" },
    { slot: Slot.Shoulders, item: "shoulderpads_of_the_stranger" },
    { slot: Slot.Back, item: "vengeance_wrap" },
    { slot: Slot.Chest, item: "bulwark_of_ancient_kings_no_cd" },
    { slot: Slot.Wrists, item: "bladespire_warbands" },
    { slot: Slot.Hands, item: "gloves_of_the_searing_grip" },
    { slot: Slot.Belt, item: "belt_of_one_hundred_deaths" },
    { slot: Slot.Legs, item: "leggings_of_murderous_intent" },
    { slot: Slot.Boots, item: "warboots_of_obliteration" },
    { slot: Slot.Ring1, item: "band_of_the_ranger_general" },
    { slot: Slot.Ring2, item: "ring_of_reciprocity" },
    { slot: Slot.Trinket1, item: "dragonspine_trophy" },
    { slot: Slot.Trinket2, item: "tsunami_talisman" },
    { slot: Slot.MainHand, item: "twinblade_of_the_phoenix" },
    { slot: Slot.OffHand, item: "" },
    { slot: Slot.Ranged, item: "serpent_spine_longbow" },
  ],
};

const p2FuryPlateBis: Preset = {
  label: "Babyhoof's P2 Fury plate BiS",
  items: [
    { slot: Slot.Head, item: "destroyer_battlehelm" },
    { slot: Slot.Neck, item: "pendant_of_the_perilous" },
    { slot: Slot.Shoulders, item: "destroyer_shoulderblades" },
    { slot: Slot.Back, item: "vengeance_wrap" },
    { slot: Slot.Chest, item: "bulwark_of_ancient_kings_no_cd" },
    { slot: Slot.Wrists, item: "bladespire_warbands" },
    { slot: Slot.Hands, item: "destroyer_gauntlets" },
    { slot: Slot.Belt, item: "belt_of_one_hundred_deaths" },
    { slot: Slot.Legs, item: "leggings_of_murderous_intent" },
    { slot: Slot.Boots, item: "warboots_of_obliteration" },
    { slot: Slot.Ring1, item: "band_of_the_ranger_general" },
    { slot: Slot.Ring2, item: "ring_of_a_thousand_marks" },
    { slot: Slot.Trinket1, item: "dragonspine_trophy" },
    { slot: Slot.Trinket2, item: "tsunami_talisman" },
    { slot: Slot.MainHand, item: "dragonstrike" },
    { slot: Slot.OffHand, item: "talon_of_azshara" },
    { slot: Slot.Ranged, item: "serpent_spine_longbow" },
  ],
};

const p2FuryLeatherBis: Preset = {
  label: "Babyhoof's P2 Fury leather BiS",
  items: [
    { slot: Slot.Head, item: "destroyer_battlehelm" },
    { slot: Slot.Neck, item: "pendant_of_the_perilous" },
    { slot: Slot.Shoulders, item: "shoulderpads_of_the_stranger" },
    { slot: Slot.Back, item: "vengeance_wrap" },
    { slot: Slot.Chest, item: "bulwark_of_ancient_kings_no_cd" },
    { slot: Slot.Wrists, item: "bladespire_warbands" },
    { slot: Slot.Hands, item: "gloves_of_the_searing_grip" },
    { slot: Slot.Belt, item: "belt_of_one_hundred_deaths" },
    { slot: Slot.Legs, item: "leggings_of_murderous_intent" },
    { slot: Slot.Boots, item: "warboots_of_obliteration" },
    { slot: Slot.Ring1, item: "band_of_the_ranger_general" },
    { slot: Slot.Ring2, item: "ring_of_reciprocity" },
    { slot: Slot.Trinket1, item: "dragonspine_trophy" },
    { slot: Slot.Trinket2, item: "tsunami_talisman" },
    { slot: Slot.MainHand, item: "dragonstrike" },
    { slot: Slot.OffHand, item: "talon_of_azshara" },
    { slot: Slot.Ranged, item: "serpent_spine_longbow" },
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
