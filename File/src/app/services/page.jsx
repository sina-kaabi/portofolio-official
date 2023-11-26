import React from "react";
import ServicesComponent from "@/components/ServicesComponent";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "NetGrid || Service",
  description: "NetGrid - Next JS Portfolio Template",
};
const page = () => {
  return (
    <MasterLayout>
      <ServicesComponent />
    </MasterLayout>
  );
};

export default page;
