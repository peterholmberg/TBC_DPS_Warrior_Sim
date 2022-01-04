import { FC, useMemo } from "react";
import { getAllGems, getGems } from "../../data/gems";
import { selectSlotGems, setGems } from "../../state/gearSlice";
import { useAppDispatch } from "../../state/hooks";
import { SlotName } from "../../types";
import { Select } from "../Select";

interface Props {
  slot: SlotName;
}
const emptyOption = { value: "no_gem", label: "No gem" };
export const GemSelect: FC<Props> = ({ slot }) => {
  const dispatch = useAppDispatch();
  const gemOptions = useMemo(() => getGems(slot), [slot]);
  const allGems = useMemo(() => getAllGems(), []);
  const equippedGems = selectSlotGems(slot);

  const setGemsFromState = (newGem: string, gemIndex: number) => {
    const newGems = equippedGems.map((gem, index) => {
      if (index === gemIndex) {
        return newGem;
      }
      return gem;
    });
    dispatch(setGems({ slot, gems: newGems }));
  };

  return (
    <div>
      <Select
        emptyOption={emptyOption}
        options={gemOptions}
        onChange={(value) => {
          setGemsFromState(value.value, 0);
        }}
        value={allGems.find((gem) => gem.value === equippedGems[0])}
      />
      <Select
        emptyOption={emptyOption}
        options={gemOptions}
        onChange={(value) => {
          setGemsFromState(value.value, 1);
        }}
        value={allGems.find((gem) => gem.value === equippedGems[1])}
      />
      <Select
        emptyOption={emptyOption}
        options={gemOptions}
        onChange={(value) => {
          setGemsFromState(value.value, 2);
        }}
        value={allGems.find((gem) => equippedGems[2])}
      />
    </div>
  );
};
