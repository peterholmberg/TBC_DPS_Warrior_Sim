import { useMemo } from "react";
import { css } from "@emotion/css";
import { ItemSelect } from "./ItemSelect";
import helmets from "../../data/armor/helm";
import shoulders from "../../data/armor/shoulder";
import { necks } from "../../data/armor/neck";
import { backs } from "../../data/armor/back";

export const GearSetup = () => {
  const styles = useMemo(() => getStyles(), []);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <div className={styles.itemBlock}>
            <label className={styles.itemLabel}>Head</label>
            <ItemSelect
              emptyOption={{ value: "empty_head", label: "No helm" }}
              options={helmets}
            />
          </div>
          <div className={styles.itemBlock}>
            <label className={styles.itemLabel}>Neck</label>
            <ItemSelect
              emptyOption={{ value: "empty_neck", label: "No neck" }}
              options={necks}
            />
          </div>
          <div className={styles.itemBlock}>
            <label className={styles.itemLabel}>Shoulder</label>
            <ItemSelect
              emptyOption={{ value: "empty_shoulder", label: "No shoulders" }}
              options={shoulders}
            />
          </div>
          <div className={styles.itemBlock}>
            <label className={styles.itemLabel}>Back</label>
            <ItemSelect
              emptyOption={{ value: "empty_back", label: "No cloak" }}
              options={backs}
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.itemBlock}>
            <label className={styles.itemLabel}>Hands</label>
            <ItemSelect
              emptyOption={{ value: "empty_hands", label: "No hands" }}
              options={helmets}
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className={styles.itemBlock}>
          <label className={styles.itemLabel}>Main hand</label>
          <ItemSelect
            emptyOption={{ value: "empty_hands", label: "No hands" }}
            options={helmets}
          />
        </div>
        <div className={styles.itemBlock}>
          <label className={styles.itemLabel}>Off hand</label>
          <ItemSelect
            emptyOption={{ value: "empty_hands", label: "No hands" }}
            options={helmets}
          />
        </div>
        <div className={styles.itemBlock}>
          <label className={styles.itemLabel}>Ranged</label>
          <ItemSelect
            emptyOption={{ value: "empty_hands", label: "No hands" }}
            options={helmets}
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
      display: flex;
      justify-content: space-between;
    `,
    column: css`
      display: flex;
      flex-direction: column;
    `,
    itemBlock: css`
      margin-bottom: 4px;
    `,
    itemLabel: css`
      display: block;
      font-size: 14px;
      font-weight: bold;
    `,
  };
};
