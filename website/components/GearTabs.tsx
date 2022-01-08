import { css, cx } from "@emotion/css";
import { useMemo, useState } from "react";
import { SlotName } from "../types";
import { MainHands } from "./gear/MainHands";

const slots: SlotName[] = [
  SlotName.MainHand,
  SlotName.OffHand,
  SlotName.Head,
  SlotName.Neck,
  SlotName.Shoulders,
  SlotName.Back,
  SlotName.Chest,
  SlotName.Wrists,
  SlotName.Hands,
  SlotName.Belt,
  SlotName.Legs,
  SlotName.Boots,
  SlotName.Ring1,
  SlotName.Ring2,
  SlotName.Trinket1,
  SlotName.Trinket2,
  SlotName.Ranged,
];

export const GearTabs = () => {
  const styles = useMemo(getStyles, []);
  const [activeTab, setActiveTab] = useState<SlotName>(SlotName.MainHand);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.tabs}>
        {slots.map((slot, index) => {
          const active = slot === activeTab;
          const tabStyle = cx(styles.tab, active && styles.active);
          return (
            <li
              className={tabStyle}
              key={`${slot}-${index}`}
              onClick={() => setActiveTab(slot)}
            >
              {slot}
            </li>
          );
        })}
      </ul>
      <div>{renderTabContent(activeTab)}</div>
    </div>
  );
};

function renderTabContent(slot: SlotName) {
  switch (slot) {
    case SlotName.MainHand:
      return <MainHands />;
  }
}

const getStyles = () => {
  return {
    wrapper: css`
      border-bottom: 1px solid darkgray;
    `,
    tabs: css`
      position: relative;
      display: flex;
      height: 30px;
      margin: 0;
      padding: 0;
    `,
    tab: css`
      list-style: none;
      padding: 4px 8px;
      margin-right: 8px;
      position: relative;
      display: block;
      border: solid transparent;
      border-width: 0 1px 1px;
      border-radius: 4px 4px 0 0;
      cursor: pointer;
      text-transform: capitalize;
    `,

    active: css`
      border-color: orange gray transparent;
      cursor: not-allowed;
      font-weight: 500;

      &::before {
        display: block;
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        top: 0;
        background-image: linear-gradient(to right, darkgray 30%, gray 99%);
      }
    `,
  };
};
