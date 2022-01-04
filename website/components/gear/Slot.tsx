import { FC, useMemo } from "react";
import { css } from "@emotion/css";
import { ItemSelect } from "./ItemSelect";
import { GroupedSelectValue, SelectValue, SlotName } from "../../types";
import { EnchantSelect } from "./EnchantSelect";
import { GemSelect } from "./GemSelect";

interface Props {
  label: string;
  slot: SlotName;
  emptyItem: SelectValue;
  itemOptions: GroupedSelectValue[];
}

export const Slot: FC<Props> = ({ emptyItem, itemOptions, label, slot }) => {
  const styles = useMemo(() => getStyles(), []);

  return (
    <div className={styles.itemBlock}>
      <label className={styles.itemLabel}>{label}</label>
      <div>
        <span>Item</span>
        <ItemSelect
          emptyOption={emptyItem}
          options={itemOptions}
          slotName={slot}
        />
      </div>
      <div>
        <span>Enchant</span>
        <EnchantSelect slotName={slot} />
      </div>
      <div>
        <span>Gems</span>
        <GemSelect slot={slot} />
      </div>
    </div>
  );
};

const getStyles = () => {
  return {
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
