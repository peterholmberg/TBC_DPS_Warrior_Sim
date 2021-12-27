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
import ranged from "../../data/weapons/Ranged";
import { mainHands, offHands } from "../../data/weapons";
import { necks } from "../../data/armor/neck";
import { backs } from "../../data/armor/back";

export const GearSetup = () => {
  const styles = useMemo(() => getStyles(), []);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <ItemSelect
            emptyOption={{ value: "empty_head", label: "No helm" }}
            options={helmets}
            label="Head"
          />
          <ItemSelect
            emptyOption={{ value: "empty_neck", label: "No neck" }}
            options={necks}
            label="Neck"
          />
          <ItemSelect
            emptyOption={{ value: "empty_shoulder", label: "No shoulders" }}
            options={shoulders}
            label="Shoulders"
          />
          <ItemSelect
            emptyOption={{ value: "empty_back", label: "No cloak" }}
            options={backs}
            label="Back"
          />
          <ItemSelect
            emptyOption={{ value: "empty_chest", label: "No chest" }}
            options={chests}
            label="Chest"
          />
          <ItemSelect
            emptyOption={{ value: "empty_wrist", label: "No wrists" }}
            options={wrists}
            label="Wrists"
          />
        </div>
        <div className={styles.column}>
          <ItemSelect
            emptyOption={{ value: "empty_hands", label: "No hands" }}
            options={hands}
            label="Hands"
          />
          <ItemSelect
            emptyOption={{ value: "empty_belt", label: "No belt" }}
            options={belts}
            label="Belt"
          />
          <ItemSelect
            emptyOption={{ value: "empty_legs", label: "No legs" }}
            options={legs}
            label="Legs"
          />
          <ItemSelect
            emptyOption={{ value: "empty_boots", label: "No boots" }}
            options={feet}
            label="Boots"
          />
          <ItemSelect
            emptyOption={{ value: "empty_ring", label: "No ring" }}
            options={rings}
            label="Ring 1"
          />
          <ItemSelect
            emptyOption={{ value: "empty_ring", label: "No ring" }}
            options={rings}
            label="Ring 2"
          />
          <ItemSelect
            emptyOption={{ value: "empty_trinket", label: "No trinket" }}
            options={trinkets}
            label="Trinket 1"
          />
          <ItemSelect
            emptyOption={{ value: "empty_trinket", label: "No trinket" }}
            options={trinkets}
            label="Trinket 2"
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <ItemSelect
          label="Main hand"
          emptyOption={{ value: "empty_weapon", label: "No weapon" }}
          options={mainHands}
        />
        <ItemSelect
          label="Off hand"
          emptyOption={{ value: "empty_weapon", label: "No weapon" }}
          options={offHands}
        />
        <ItemSelect
          label="Ranged"
          emptyOption={{ value: "empty_ranged", label: "No ranged" }}
          options={ranged}
        />
      </div>
    </div>
  );
};

const getStyles = () => {
  return {
    wrapper: css`
      max-width: 600px;
      display: flex;
      justify-content: space-between;
    `,
    column: css`
      display: flex;
      flex-direction: column;
    `,
  };
};
