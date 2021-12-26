import { NextPage } from "next";
import { Page } from "../components/Page";
import { GearSetup } from "../components/gear/GearSetup";

const Simulator: NextPage = () => {
  return (
    <Page>
      <GearSetup />
    </Page>
  );
};

export default Simulator;
