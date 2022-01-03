import { SelectValue, SlotName } from "../../types";
import { Select } from "../Select";
import { useAppDispatch } from "../../state/hooks";
import { selectSlotItem, setItem } from "../../state/gearSlice";
import { FC } from "react";

interface Props {
  slotName: SlotName;
  options: SelectValue[] | Record<string, SelectValue[]>;
  emptyOption: SelectValue;
}

export const ItemSelect: FC<Props> = ({ emptyOption, options, slotName }) => {
  const dispatch = useAppDispatch();
  return (
    <Select
      emptyOption={emptyOption}
      options={options}
      slot={slotName}
      onChange={(event) => {
        dispatch(setItem({ slot: slotName, item: event.target.value }));
      }}
      selector={selectSlotItem(slotName)}
    />
  );
};
