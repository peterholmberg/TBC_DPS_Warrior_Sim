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
            propName="head"
          />
          <ItemSelect
            emptyOption={{ value: "empty_neck", label: "No neck" }}
            options={necks}
            label="Neck"
            propName="neck"
          />
          <ItemSelect
            emptyOption={{ value: "empty_shoulder", label: "No shoulders" }}
            options={shoulders}
            label="Shoulders"
            propName="shoulders"
          />
          <ItemSelect
            emptyOption={{ value: "empty_back", label: "No cloak" }}
            options={backs}
            label="Back"
            propName="back"
          />
          <ItemSelect
            emptyOption={{ value: "empty_chest", label: "No chest" }}
            options={chests}
            label="Chest"
            propName="chest"
          />
          <ItemSelect
            emptyOption={{ value: "empty_wrist", label: "No wrists" }}
            options={wrists}
            label="Wrists"
            propName="wrists"
          />
        </div>
        <div className={styles.column}>
          <ItemSelect
            emptyOption={{ value: "empty_hands", label: "No hands" }}
            options={hands}
            label="Hands"
            propName="hands"
          />
          <ItemSelect
            emptyOption={{ value: "empty_belt", label: "No belt" }}
            options={belts}
            label="Belt"
            propName="belt"
          />
          <ItemSelect
            emptyOption={{ value: "empty_legs", label: "No legs" }}
            options={legs}
            label="Legs"
            propName="legs"
          />
          <ItemSelect
            emptyOption={{ value: "empty_boots", label: "No boots" }}
            options={feet}
            label="Boots"
            propName="boots"
          />
          <ItemSelect
            emptyOption={{ value: "empty_ring", label: "No ring" }}
            options={rings}
            label="Ring 1"
            propName="ring1"
          />
          <ItemSelect
            emptyOption={{ value: "empty_ring", label: "No ring" }}
            options={rings}
            label="Ring 2"
            propName="ring2"
          />
          <ItemSelect
            emptyOption={{ value: "empty_trinket", label: "No trinket" }}
            options={trinkets}
            label="Trinket 1"
            propName="trinket1"
          />
          <ItemSelect
            emptyOption={{ value: "empty_trinket", label: "No trinket" }}
            options={trinkets}
            label="Trinket 2"
            propName="trinket2"
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <ItemSelect
          label="Main hand"
          emptyOption={{ value: "empty_weapon", label: "No weapon" }}
          options={mainHands}
          propName="mainHand"
        />
        <ItemSelect
          label="Off hand"
          emptyOption={{ value: "empty_weapon", label: "No weapon" }}
          options={offHands}
          propName="offHand"
        />
        <ItemSelect
          label="Ranged"
          emptyOption={{ value: "empty_ranged", label: "No ranged" }}
          options={ranged}
          propName="ranged"
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
