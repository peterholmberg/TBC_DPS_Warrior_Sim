import { FC } from "react";
import { SelectValue, SlotName } from "../../types";

interface Props {
  items: { [key: string]: SelectValue[] };
  enchants: [];
  gems: {};
  slot: SlotName;
}

export const SlotTable: FC<Props> = ({ items, enchants, gems }) => {
  return (
    <div>
      <div>
        {Object.entries(items).map(([key, values], index) => {
          return (
            <div>
              <div>{key}</div>
              {values.map((weapon, index) => {
                return <div>{weapon.label}</div>;
              })}
            </div>
          );
        })}
      </div>
      <div>Enchant</div>
      <div>Gems</div>
    </div>
  );
};
