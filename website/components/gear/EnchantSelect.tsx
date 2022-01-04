import { FC, useMemo } from "react";
import { getEnchants } from "../../data/enchants";
import { selectSlotEnchant, setEnchant } from "../../state/gearSlice";
import { useAppDispatch } from "../../state/hooks";
import { SelectValue, SlotName } from "../../types";
import { Select } from "../Select";

interface Props {
  slotName: SlotName;
}

const emptyOption = { value: "no_enchant", label: "No enchant" };

export const EnchantSelect: FC<Props> = ({ slotName }) => {
  const dispatch = useAppDispatch();
  const enchants = useMemo(() => getEnchants(slotName), []);
  return (
    <Select
      emptyOption={emptyOption}
      options={enchants}
      onChange={(value) =>
        dispatch(setEnchant({ slot: slotName, enchant: value.value }))
      }
      value={enchants.find(
        (enchant) => enchant.value === selectSlotEnchant(slotName)
      )}
    />
  );
};
