import { useMemo } from "react";
import { NextPage } from "next";
import { css } from "@emotion/css";
import { Page } from "../components/Page";
import { Faq } from "../components/Faq";
import { faq } from "../data/faq";

const About: NextPage = () => {
  const styles = useMemo(() => getStyles(), []);

  return (
    <Page>
      <div>Ported from Kateparry's WoW Fury Sim</div>
      <div>GroxEmpire | Grahand - BloodsailBuccaneers</div>
      This project is a TBC port from the wow classic fury sim. Link to the
      original project{" "}
      <a href="https://wow-fury-sim.herokuapp.com/">WoW Classic Fury Sim</a>.
      You could also join their{" "}
      <a href="https://discord.gg/xTuKsRz">Discord.</a>
      <div className={styles.faq}>
        <div className={styles.faqTitle}>Frequently asked questions</div>
        {faq.map((question, index) => {
          return <Faq question={question} key={index} />;
        })}
      </div>
    </Page>
  );
};

const getStyles = () => {
  return {
    faqTitle: css`
      font-size: 20px;
    `,
    faq: css`
      margin-top: 40px;
    `,
  };
};

export default About;
