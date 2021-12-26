import { css } from "@emotion/css";
import { useMemo } from "react";

export const Footer = () => {
  const styles = useMemo(() => getStyles(), []);
  return <div className={styles.footer}>Fööter</div>;
};

const getStyles = () => {
  return {
    footer: css`
      height: 40px;
      background-color: #ccc;
      display: flex;
      justify-content: center;
      padding: 8px;
    `,
  };
};
