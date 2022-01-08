import { mainHands } from "../../data/weapons";
import { SlotName } from "../../types";
import { SlotTable } from "./SlotTable";

export const MainHands = () => {
  return (
    <SlotTable
      items={mainHands}
      enchants={[]}
      gems={{}}
      slot={SlotName.MainHand}
    />
  );
};
