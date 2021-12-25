import React, { useMemo } from "react";
import { css } from "@emotion/css";
import { Nav } from "./Nav";

export const Header = () => {
  const styles = useMemo(() => getStyles(), []);
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>TBC DPS Warrior Sim</div>
      <Nav />
      <div className={styles.report}>
        <a
          href="https://github.com/TheGroxEmpire/Grox-Kateparry_TBC_Warrior_Sim"
          target="_blank"
        >
          Report issue
        </a>
      </div>
    </div>
  );
};

const getStyles = () => {
  return {
    header: css`
      display: flex;
      align-items: center;
      background-color: #ccc;
      padding: 0 8px;
    `,
    headerTitle: css`
      font-size: 24px;
      padding-right: 8px;
      border-right: 1px solid #171717;
    `,
    report: css`
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
    `,
  };
};
