import { NextPage } from "next";
import { Page } from "../components/Page";
import { GearSetup } from "../components/gear/GearSetup";
import { GearTabs } from "../components/GearTabs";
import { Presets } from "../components/gear/Presets";

const Simulator: NextPage = () => {
  return (
    <Page>
      <Presets />
      <GearTabs />
      {/* <GearSetup /> */}
    </Page>
  );
};

export default Simulator;
