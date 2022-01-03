import { FC, useMemo } from "react";
import { css } from "@emotion/css";
import { ItemSelect } from "./ItemSelect";
import { SelectValue, SlotName } from "../../types";
import { getGems } from "../../data/gems";
import { getEnchants } from "../../data/enchants";
import { Select } from "../Select";
import { useAppDispatch } from "../../state/hooks";
import {
  selectSlotEnchant,
  selectSlotItem,
  setEnchant,
  setItem,
} from "../../state/gearSlice";

interface Props {
  label: string;
  slot: SlotName;
  emptyItem: SelectValue;
  itemOptions: Record<string, SelectValue[]>;
}

export const Slot: FC<Props> = ({ emptyItem, itemOptions, label, slot }) => {
  const styles = useMemo(() => getStyles(), []);
  const enchants = getEnchants(slot);
  const gems = getGems(slot);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.itemBlock}>
      <label className={styles.itemLabel}>{label}</label>
      <div>
        <span>Item</span>
        <Select
          emptyOption={emptyItem}
          options={itemOptions}
          onChange={(event) => {
            dispatch(setItem({ slot, item: event.target.value }));
          }}
          selector={selectSlotItem(slot)}
        />
      </div>
      <div>
        <span>Enchant</span>
        <Select
          emptyOption={{ value: "no_enchant", label: "No enchant" }}
          options={enchants}
          onChange={(event) => {
            dispatch(setEnchant({ slot, enchant: event.target.value }));
          }}
          selector={selectSlotEnchant(slot)}
        />
      </div>
      <div>
        <span>Gems</span>
        <Select
          emptyOption={{ value: "no_gem", label: "No gem" }}
          options={gems}
          onChange={(event) => {
            dispatch(setEnchant({ slot, enchant: event.target.value }));
          }}
          selector={selectSlotEnchant(slot)}
        />
        <Select
          emptyOption={{ value: "no_gem", label: "No gem" }}
          options={enchants}
          onChange={(event) => {
            dispatch(setEnchant({ slot, enchant: event.target.value }));
          }}
          selector={selectSlotEnchant(slot)}
        />
        <Select
          emptyOption={{ value: "no_gem", label: "No gem" }}
          options={enchants}
          onChange={(event) => {
            dispatch(setEnchant({ slot, enchant: event.target.value }));
          }}
          selector={selectSlotEnchant(slot)}
        />
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
