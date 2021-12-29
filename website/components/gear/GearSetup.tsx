import { useMemo } from "react";
import { css } from "@emotion/css";
import { ItemSelect } from "./ItemSelect";
import helmets from "../../data/armor/helm";
import shoulders from "../../data/armor/shoulder";
import chests from "../../data/armor/chest";
import wrists from "../../data/armor/wrist";
import hands from "../../data/armor/hands";
import belts from "../../data/armor/belt";
import legs from "../../data/armor/legs";
import feet from "../../data/armor/feet";
import rings from "../../data/armor/ring";
import trinkets from "../../data/armor/trinket";
import ranged from "../../data/weapons/ranged";
import { mainHands, offHands } from "../../data/weapons";
import { necks } from "../../data/armor/neck";
import { backs } from "../../data/armor/back";
import { Slot } from "../../types";
import { Presets } from "./presets";

export const GearSetup = () => {
  const styles = useMemo(() => getStyles(), []);

  return (
    <div className={styles.wrapper}>
      <Presets />
      <div className={styles.gearSelect}>
        <div className={styles.column}>
          <ItemSelect
            emptyOption={{ value: "empty_head", label: "No helm" }}
            options={helmets}
            label="Head"
            slot={Slot.Head}
          />
          <ItemSelect
            emptyOption={{ value: "empty_neck", label: "No neck" }}
            options={necks}
            label="Neck"
            slot={Slot.Neck}
          />
          <ItemSelect
            emptyOption={{ value: "empty_shoulder", label: "No shoulders" }}
            options={shoulders}
            label="Shoulders"
            slot={Slot.Shoulders}
          />
          <ItemSelect
            emptyOption={{ value: "empty_back", label: "No cloak" }}
            options={backs}
            label="Back"
            slot={Slot.Back}
          />
          <ItemSelect
            emptyOption={{ value: "empty_chest", label: "No chest" }}
            options={chests}
            label="Chest"
            slot={Slot.Chest}
          />
          <ItemSelect
            emptyOption={{ value: "empty_wrist", label: "No wrists" }}
            options={wrists}
            label="Wrists"
            slot={Slot.Wrists}
          />
          <ItemSelect
            label="Main hand"
            emptyOption={{ value: "empty_weapon", label: "No weapon" }}
            options={mainHands}
            slot={Slot.MainHand}
          />
          <ItemSelect
            label="Off hand"
            emptyOption={{ value: "empty_weapon", label: "No weapon" }}
            options={offHands}
            slot={Slot.OffHand}
          />
        </div>
        <div className={styles.column}>
          <ItemSelect
            emptyOption={{ value: "empty_hands", label: "No hands" }}
            options={hands}
            label="Hands"
            slot={Slot.Hands}
          />
          <ItemSelect
            emptyOption={{ value: "empty_belt", label: "No belt" }}
            options={belts}
            label="Belt"
            slot={Slot.Belt}
          />
          <ItemSelect
            emptyOption={{ value: "empty_legs", label: "No legs" }}
            options={legs}
            label="Legs"
            slot={Slot.Legs}
          />
          <ItemSelect
            emptyOption={{ value: "empty_boots", label: "No boots" }}
            options={feet}
            label="Boots"
            slot={Slot.Boots}
          />
          <ItemSelect
            emptyOption={{ value: "empty_ring", label: "No ring" }}
            options={rings}
            label="Ring 1"
            slot={Slot.Ring1}
          />
          <ItemSelect
            emptyOption={{ value: "empty_ring", label: "No ring" }}
            options={rings}
            label="Ring 2"
            slot={Slot.Ring2}
          />
          <ItemSelect
            emptyOption={{ value: "empty_trinket", label: "No trinket" }}
            options={trinkets}
            label="Trinket 1"
            slot={Slot.Trinket1}
          />
          <ItemSelect
            emptyOption={{ value: "empty_trinket", label: "No trinket" }}
            options={trinkets}
            label="Trinket 2"
            slot={Slot.Trinket2}
          />
          <ItemSelect
            label="Ranged"
            emptyOption={{ value: "empty_ranged", label: "No ranged" }}
            options={ranged}
            slot={Slot.Ranged}
          />
        </div>
      </div>
    </div>
  );
};

const getStyles = () => {
  return {
    wrapper: css`
      max-width: 600px;
    `,
    gearSelect: css`
      display: flex;
      justify-content: space-between;
    `,
    column: css`
      display: flex;
      flex-direction: column;
    `,
  };
};
