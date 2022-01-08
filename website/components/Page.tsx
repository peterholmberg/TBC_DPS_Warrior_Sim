import { FC, ReactNode, useMemo } from "react";
import { css } from "@emotion/css";
import Head from "next/head";
import { Header } from "./Header";

interface PageProps {
  children: ReactNode | ReactNode[];
}

export const Page: FC<PageProps> = ({ children }) => {
  const styles = useMemo(() => getStyles(), []);
  return (
    <div className={styles.page}>
      <Head>
        <title>TBC DPS Warrior Sim</title>
        <meta name="description" content="WoW TBC simulator for DPS Warriors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.pageContent}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

const getStyles = () => {
  return {
    page: css``,
    pageContent: css`
      margin: 0 auto 40px;
      max-width: 1050px;
    `,
    content: css`
      padding: 8px;
    `,
  };
};
