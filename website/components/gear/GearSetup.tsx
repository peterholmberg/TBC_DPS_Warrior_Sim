import { useMemo } from "react";
import { css } from "@emotion/css";
import { ItemSelect } from "./ItemSelect";
import { Presets } from "./Presets";
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
import { SlotName } from "../../types";
import { Slot } from "./Slot";

export const GearSetup = () => {
  const styles = useMemo(() => getStyles(), []);
  return (
    <div className={styles.wrapper}>
      <Presets />
      <div className={styles.gearSelect}>
        <div className={styles.column}>
          <Slot
            label="Head"
            slot={SlotName.Head}
            emptyItem={{ value: "empty_head", label: "No helm" }}
            itemOptions={helmets}
          />
        </div>
        <div className={styles.column}>
          {/* <ItemSelect
            emptyOption={{ value: "empty_hands", label: "No hands" }}
            options={hands}
            label="Hands"
            slot={SlotName.Hands}
          />
          <ItemSelect
            emptyOption={{ value: "empty_belt", label: "No belt" }}
            options={belts}
            label="Belt"
            slot={SlotName.Belt}
          />
          <ItemSelect
            emptyOption={{ value: "empty_legs", label: "No legs" }}
            options={legs}
            label="Legs"
            slot={SlotName.Legs}
          />
          <ItemSelect
            emptyOption={{ value: "empty_boots", label: "No boots" }}
            options={feet}
            label="Boots"
            slot={SlotName.Boots}
          />
          <ItemSelect
            emptyOption={{ value: "empty_ring", label: "No ring" }}
            options={rings}
            label="Ring 1"
            slot={SlotName.Ring1}
          />
          <ItemSelect
            emptyOption={{ value: "empty_ring", label: "No ring" }}
            options={rings}
            label="Ring 2"
            slot={SlotName.Ring2}
          />
          <ItemSelect
            emptyOption={{ value: "empty_trinket", label: "No trinket" }}
            options={trinkets}
            label="Trinket 1"
            slot={SlotName.Trinket1}
          />
          <ItemSelect
            emptyOption={{ value: "empty_trinket", label: "No trinket" }}
            options={trinkets}
            label="Trinket 2"
            slot={SlotName.Trinket2}
          />
          <ItemSelect
            label="Ranged"
            emptyOption={{ value: "empty_ranged", label: "No ranged" }}
            options={ranged}
            slot={SlotName.Ranged}
          /> */}
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
