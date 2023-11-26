import React from "react";
import PortfolioComponent from "@/components/PortfolioComponent";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "NetGrid || Portfolio",
  description: "NetGrid - Next JS Portfolio Template",
};
const page = () => {
  return (
    <MasterLayout>
      <PortfolioComponent />
    </MasterLayout>
  );
};

export default page;
