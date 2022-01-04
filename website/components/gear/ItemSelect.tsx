import { FC } from "react";
import { Select } from "../Select";
import { useAppDispatch } from "../../state/hooks";
import { selectSlotItem, setItem } from "../../state/gearSlice";
import { GroupedSelectValue, SelectValue, SlotName } from "../../types";

interface Props {
  slotName: SlotName;
  options: SelectValue[] | GroupedSelectValue[];
  emptyOption: SelectValue;
}

export const ItemSelect: FC<Props> = ({ emptyOption, options, slotName }) => {
  const dispatch = useAppDispatch();
  return (
    <Select
      emptyOption={emptyOption}
      options={options}
      onChange={(value) =>
        dispatch(setItem({ slot: slotName, item: value.value }))
      }
      value={selectSlotItem(slotName)}
    />
  );
};
